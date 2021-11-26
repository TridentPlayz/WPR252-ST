let mongoose = require("mongoose");
let User = new mongoose.Schema({
  title: {
    type: String,
    enum: ["Mr", "Mrs","MS","Dr","Sir"],
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    required: true,
    type: String,
  },
  position: {
    required: true,
    type: String,
    enum: ["CEO", "Manager", "Employee",],
  },
  company: {
    required: true,
    type: String,
    enum: ["umknown"],
  },
});

module.exports = mongoose.model("User", User);
