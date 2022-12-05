const mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
