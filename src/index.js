const express = require("express");
const mongoose = require("mongoose");
// const authHandler = require("./middleware/auth");
// const User = require("./models/user");
const router = require("./routes/students/student.controller");

const app = express();
app.use(express.json());
// app.use(authHandler);

mongoose
  .connect("mongodb://localhost:27017/bootcamp")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(`Couldn't connected to MongoDB, ${error}`));

app.use("/students", router);

app.listen(5000, () => console.log("App is listening at port 5000"));
