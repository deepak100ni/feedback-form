// models/question.js
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  answer: {
    type: mongoose.Schema.Types.Mixed,
  },
  type: {
    type: String,
    enum: ["Text", "Textarea", "Date", "Checkbox", "Radio", "File"],
    required: true,
  },
  file : {
    type : String,
  },
  options: [String], 
  requirement: {
    type: Boolean,
    required: true,
  },
  sequence: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Question", questionSchema);
