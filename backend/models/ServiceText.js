const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  MainHeading: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("ServiceText", serviceSchema);
