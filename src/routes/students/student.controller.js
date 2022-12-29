const express = require("express");
// const errorHandler = require("../../middleware/error");
const Student = require("../../models/student");
// const { generateAuthToken } = require("../../utils/helpers");
const createStudentSchema = require("./validationSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  const students = await Student.find();
  res.status(200).send(students);
});

router.get("/:studentId", async (req, res) => {
  const student = await Student.findOne({ _id: req.params.studentId });

  res.status(200).send(student);
});

router.put("/:studentId", async (req, res) => {
  const student = await Student.findByIdAndUpdate({
    _id: req.params.studentId,
  });

  res.status(200).send(student);
});

router.delete("/:studentId", async (req, res) => {
  const student = await Student.findByIdAndDelete({
    _id: req.params.studentId,
  });

  res.status(200).send(student);
});

// router.post("/login", async (req, res) => {
//   const user = await User.findOne({ email: req.body.email });

//   if (!user) {
//     return res.status(400).send({ message: "Invalid Email or Password" });
//   }

//   if (req.body.password !== "khizar123") {
//     return res.status(400).send({ message: "Invalid Email or Password" });
//   }

//   const token = generateAuthToken({
//     username: user.username,
//     email: user.email,
//     id: user._id,
//   });

//   res.status(200).send({ message: "success", token });
// });

router.post("/", async (req, res) => {
  const payload = req.body;
  const { error } = createStudentSchema(payload);
  if (error) {
    return res.status(400).send({ message: error.message });
  }
  let student = new Student(payload);

  student = await student.save();
  res.status(200).send(student);
});

module.exports = router;
