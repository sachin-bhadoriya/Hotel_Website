const express = require("express");
const multer = require("multer");
const path = require("path");
const ServiceText = require("../models/ServiceText");

const router = express.Router();



// Set up multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, "hotelwebimage" +  Date.now()   + ext);
  }
});

const upload = multer({ storage: storage });



// Create a new note
router.post("/addservicecontents", upload.single("image"), async (req, res) => {
  const { heading, content, MainHeading } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const newServiceText = new ServiceText({ heading, content, MainHeading, image });
    await newServiceText.save();
    res.status(201).json({ success: true, message: "Note added", serviceText: newServiceText });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add note", error: error.message });
  }
});


// Update ServiceText
router.put("/updateservicecontents/:id", upload.single('image'), async (req, res) => {
  const { id } = req.params;  // text ID
  const { heading, content, MainHeading } = req.body;
  
  // Prepare the update data
  const updatedData = { heading, content, MainHeading };

  // Check if an image is provided
  if (req.file) {
    updatedData.image = req.file.filename;  // Store the image filename if a new image is uploaded
  }

  try {
    const updateServiceText = await ServiceText.findByIdAndUpdate(
      id,  // Finding the text by ID
      updatedData,  // New data (including image)
      { new: true }  // Return updated note
    );

    if (!updateServiceText) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updateServiceText);  // Send back the updated note
  } catch (err) {
    res.status(500).json({ message: "Error updating the serviceText", error: err.message });
  }
});


// GET all notes 

router.get('/servicecontents', async (req, res) => {
  try {
    const serviceText = await ServiceText.find(); // No user filter
    // frontend me problem ho rhi thi last note bachne pr error aa rha tha 

    // if (!note || note.length === 0) {
    //   return res.status(404).json({ message: "No note found" });
    // }
    res.json(serviceText);

    res.status(200).json(servicetexts);
  } catch (error) {
    console.error("Error fetching notes:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get a single note by ID
router.get('/servicecontents/:id', async (req, res) => {
  try {
    const serviceText = await ServiceText.findById(req.params.id);
    if (!serviceText) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(serviceText);
  } catch (err) {
    res.status(500).json({ message: "Error fetching the note", error: err.message });
  }
});



// Delete Note
router.delete("/deleteservicecontents/:id", async (req, res) => {
  const { id } = req.params;  // Note ID
  
  try {
    const deleteServiceText = await ServiceText.findOneAndDelete({ _id: id,}  // Finding the note by ID
    );
    if (!deleteServiceText) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({message: "Note deleted successfully", deleteServiceText});     //Send back the updated note
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});


module.exports = router;
