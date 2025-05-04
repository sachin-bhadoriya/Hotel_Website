const express = require("express");
const router = express.Router();
const AboutText = require("../models/AboutText");

// Create a new note
router.post("/addaboutcontents", async (req, res) => {
  const { heading, paragraph } = req.body;

  try {
    const newAboutText = new AboutText({ heading, paragraph });
    await newAboutText.save();
    res.status(201).json({ success: true, message: "Note added successfully", aboutText: newAboutText });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add note", error: error.message });
  }
});


// Update ServiceText
router.put('/updateaboutcontents/:id', async (req, res) => {
  try {
    const updated = await AboutText.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
});
// router.put("/updateaboutcontents/:id", async (req, res) => {
//   const { id } = req.params;  // Note ID
//   const { heading, paragraph } = req.body;  // Data to update
  
//   try {
//     const updateAboutText = await AboutText.findByIdAndUpdate(
//       id,  // Finding the note by ID
//       { heading, paragraph },  // New data
//       { new: true }  // Return updated note
//     );
//     if (!updateAboutText) {
//       return res.status(404).json({ message: "Note not found" });
//     }
//     res.status(200).json(updateAboutText);  // Send back the updated note
//   } catch (err) {
//     res.status(500).json({ message: "Error updating the AboutText", error: err.message });
//   }
// });

// GET all notes (No user filter)

router.get('/aboutcontents', async (req, res) => {
  try {
    const aboutText = await AboutText.find(); // No user filter
    // frontend me problem ho rhi thi last note bachne pr error aa rha tha 

    // if (!note || note.length === 0) {
    //   return res.status(404).json({ message: "No note found" });
    // }
    // res.json(aboutText);

    res.status(200).json(aboutText);
  } catch (error) {
    console.error("Error fetching notes:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get a single note by ID
router.get('/aboutcontents/:id', async (req, res) => {
  try {
    const aboutText = await AboutText.findById(req.params.id);
    if (!aboutText) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(aboutText);
  } catch (err) {
    res.status(500).json({ message: "Error fetching the note", error: err.message });
  }
});



// Delete Note
router.delete("/deleteaboutcontents/:id", async (req, res) => {
  const { id } = req.params;  // Note ID
  
  try {
    const deleteAboutText = await AboutText.findOneAndDelete({ _id: id,}  // Finding the note by ID
    );
    if (!deleteAboutText) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({message: "Note deleted successfully", deleteAboutText});     //Send back the updated note
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});


module.exports = router;
