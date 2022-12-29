//models
const mongoose = require("mongoose");

// student schema

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  cell: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  password: String,
});

const Student = mongoose.model("Students", studentSchema);

module.exports = Student;
