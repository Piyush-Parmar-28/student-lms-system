const mongoose = require("mongoose");

//  User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
  phone: Number,
});

//  Creating collection named: 'users'
//  Mongoose will automatically convert User to plural & 1st letter in small case (users)
const userColl= mongoose.model("User", userSchema);

module.exports= userColl