//  Requiring Modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 8000;
var cors = require("cors");

//  Using Mongoose Models
const userColl = require("./Schema/userSchema");
const stuColl = require("./Schema/studentSchema");

//  Creating Server
var app = express();

//  Using Modules for server
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "views"));

/* Connecting to Database (MongoDB Atlas) */
mongoose.connect("mongodb://0.0.0.0:27017/LMS");
var db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection Succeeded");
});

//  Routes here
app.post("/login", async function (req, res) {
  var email = req.body.email;
  var pass = req.body.pass;

  const user = await userColl.findOne({ email, pass });

  return user == null
    ? res.send({ message: "User not found!", status: 404 })
    : res.send({ message: "ok", status: 200 });
});

app.post("/signup", function (req, res) {
  var data = new userColl({
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
    phone: req.body.phone,
  });

  //  OLD CODE (without mongoose)
  // db.collection("users").insertOne(data, function (err, collection) {
  //   if (err) {
  //     throw err;
  //   } else {
  //     res.send({ status: 200, message: "Record Inserted Successfully!" });
  //   }
  // });

  //  NEW CODE (using mongoose)
  data
    .save()
    .then(() => {
      res.send({ status: 200, message: "Record Inserted Successfully!" });
    })
    .catch((e) => {
      res.send(e);
    });
});

app.post("/add", async (req, res) => {
  var data = new stuColl({
    name: req.body.name,
    fname: req.body.fname,
    city: req.body.city,
    phone: req.body.phone,
    gender: req.body.gender,
  });

  data
    .save()
    .then(() => {
      res.send({ status: 200, message: "Student Inserted Successfully!" });
    })
    .catch((e) => {
      res.send(e);
    });
});

app.post("/find", async function (req, res) {
  var myName = req.body.user;

  const stuData = await stuColl.findOne({ name: { $regex: `^${myName}$`, $options: 'i' } });

  return stuData == null
    ? res.send({ message: "Student not found!", status: 404 })
    : res.send({ message: "ok", status: 200, stuData });
});

app.get("/getstu", async function (req, res) {
  const stuData = await stuColl.find();

  return stuData == null
    ? res.send({ message: "Student not found!", status: 404 })
    : res.send({ message: "ok", status: 200, stuData });
});

app.post("/del", async function (req, res) {
  var name = req.body.name;
  var fname = req.body.fname;

  //  Doing case-insensitive query
  const result = await stuColl.deleteOne({ name: { $regex: `^${name}$`, $options: 'i' }, fname: { $regex: `^${fname}$`, $options: 'i' } });

  return result.deletedCount == 0
    ? res.send({ message: "Student not found!", status: 404 })
    : res.send({ message: "ok", status: 200 });
});

app.post("/update", async function (req, res) {
  var id = req.body.id;
  var name = req.body.name;
  var fname = req.body.fname;
  var city = req.body.city;
  var phone = req.body.phone;
  var gender = req.body.gender;

  const result = await stuColl.findByIdAndUpdate(id, { name, fname, city, phone, gender });

  return result == null
    ? res.send({ message: "Update Unsuccessuful. Try Again!", status: 400 })
    : res.send({ message: "ok", status: 200 });
});

app.listen(port, () => {
  console.log(`Server Listening on Port: ${port}`);
});