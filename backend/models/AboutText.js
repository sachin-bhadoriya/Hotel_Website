const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("AboutText", aboutSchema);
