require('dotenv').config()
const mongoose = require("mongoose");
var encrypt = require('mongoose-encryption');

//  User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
  phone: Number,
});

const secretStr= process.env.SECRET_STR;
userSchema.plugin(encrypt, { secret: secretStr, encryptedFields: ['pass'] });

//  Creating collection named: 'users'
//  Mongoose will automatically convert User to plural & 1st letter in small case (users)
const userColl= mongoose.model("User", userSchema);

module.exports= userColl