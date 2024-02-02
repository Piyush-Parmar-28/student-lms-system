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
  var name = req.body.user;

  const stuData = await stuColl.findOne({ name });

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

  const result = await stuColl.deleteOne({ name, fname });

  console.log("result is: ", result);

  return result.deletedCount == 0
    ? res.send({ message: "Student not found!", status: 404 })
    : res.send({ message: "ok", status: 200 });
});

// app.get("/signUp", function (req, res) {
//   res.sendFile(path.join(__dirname, "public/signUp.html"));
// });

// app.get("/contactUs", function (req, res) {
//   res.sendFile(path.join(__dirname, "public/contactUs.html"));
// });

// app.get("/addStudent", function (req, res) {
//   res.render("addStudent.ejs", {
//     ADDed: "No",
//   });
// });

// app.get("/findStudent", function (req, res) {
//   res.render("findStudent.ejs", {
//     /* Initially, when no form has been submitted, then let us set variable FOund to be "Yes" in our ejs file */
//     FOund: "Yes",
//   });
// });

// app.get("/studentList", function (req, res) {
//   db.collection("Students")
//     .find()
//     .toArray(function (err, result) {
//       if (err) {
//         throw err;
//       } else {
//         /* console.log(result)
//             console.log(result.length) */

//         return res.render("studentList.ejs", {
//           SIze: result.length,
//           REsult: result,
//         });
//       }
//     });
// });

// app.get("/deleteStudent", function (req, res) {
//   res.render("deleteStudent.ejs", {
//     DEleted: "No",
//   });
// });

// app.get("/mailSent", function (req, res) {
//   return res.sendFile(path.join(__dirname, "public/mailSent.html"));
// });

// /* post Methods */

// /* If we do not use this, then body property will be undefined. */
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.post("/addStudent", function (req, res) {
//   var name = req.body.Name;
//   var fname = req.body.Fname;
//   var phone = req.body.Number;
//   var gender = req.body.Gender;
//   var city = req.body.City;

//   console.log(name);

//   var data = {
//     name: name,
//     fname: fname,
//     phone: phone,
//     gender: gender,
//     city: city,
//   };

// db.collection("Students").insertOne(data, function (err, collection) {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Student Added Successfully!");

//     return res.render("addStudent.ejs", {
//       ADDed: "Yes",
//     });
//   }
// });
// });

// OLDNAME = "";
// OLDFNAME = "";

// app.post("/findStudent", function (req, res) {
//   var name = req.body.Name.toLowerCase();

//   console.log("Name is:" + name);

//   /* After creation of index in MongoDB, this method of search will be is for case-insensitive search. */
//   db.collection("Students")
//     .find()
//     .toArray(function (err, result) {
//       if (err) {
//         throw err;
//       }

//       console.log("result array is: ");
//       console.log(result);

//       var data = result.find((obj) => {
//         console.log("object is: ");
//         console.log(obj);
//         if (obj.name.toLowerCase() === name) {
//           return obj;
//         }
//       });
//       console.log("Filterd data: ");
//       console.log(data);

//       if (data === null) {
//         console.log("No Such Student Exists!");

//         return res.render("findStudent.ejs", {
//           FOund: "No",
//         });
//       } else {
//         let NAME = data.name;
//         let FNAME = data.fname;
//         let PHONE = data.phone;
//         let GENDER = data.gender;
//         let CITY = data.city;

//         OLDNAME = NAME;
//         OLDFNAME = FNAME;

//         let AVATAR = "maleAvatar";

//         if (GENDER == "Female") {
//           AVATAR = "femaleAvatar";
//         }

//         // While using ejs file, we have to use 'res.render' instead of using 'res.sendFile'
//         res.render("studentDetailCard.ejs", {
//           STAtus: "Not Updated",
//           Sname: NAME,
//           Fname: FNAME,
//           PHone: PHONE,
//           GEnder: GENDER,
//           CIty: CITY,

//           AVAtar: AVATAR,
//         });
//       }
//     });
// });

// app.post("/deleteSTUDENT", function (req, res) {
//   var name = req.body.Name;
//   var fname = req.body.Fname;

//   console.log(name);

//   db.collection("Students")
//     .find({ name: name, fname: fname })
//     .toArray(function (err, result) {
//       if (err) {
//         throw err;
//       } else {
//         console.log(result);
//       }

//       if (result.length == 0) {
//         console.log("No Such Student Exists!");

//         return res.render("deleteStudent.ejs", {
//           DEleted: "No Data",
//         });
//       } else {
//         db.collection("Students").deleteOne({ name: name, fname: fname });
//         console.log("Student Deleted Successfully!");

//         return res.render("deleteStudent.ejs", {
//           DEleted: "Yes",
//         });
//       }
//     });
// });

// app.post("/updateStudentDetails", function (req, res) {
//   var name = OLDNAME;
//   var fname = OLDFNAME;

//   console.log(name);
//   console.log(fname);

//   db.collection("Students")
//     .find({ name: name, fname: fname })
//     .toArray(function (err, result) {
//       if (err) {
//         throw err;
//       } else {
//         /* console.log(result) */

//         let NAME = result[0].name;
//         let FNAME = result[0].fname;
//         let PHONE = result[0].phone;
//         let GENDER = result[0].gender;
//         let CITY = result[0].city;

//         let AVATAR = "maleAvatar";

//         if (GENDER == "Female") {
//           AVATAR = "femaleAvatar";
//         }

//         /* console.log(GENDER) */
//         /* console.log(OLDNAME) */

//         return res.render("addNewDetails.ejs", {
//           NAme: NAME,
//           Fname: FNAME,
//           PHOne: PHONE,
//           GEnder: GENDER,
//           CIty: CITY,
//         });
//       }
//     });
// });

// app.post("/addNewDetails", function (req, res) {
//   var oldName = OLDNAME;
//   var oldFname = OLDFNAME;

//   var name = req.body.Name;
//   var fname = req.body.Fname;
//   var phone = req.body.Number;
//   var gender = req.body.Gender;
//   var city = req.body.City;

//   db.collection("Students").updateOne(
//     { name: oldName, fname: oldFname },
//     {
//       $set: {
//         name: name,
//         fname: fname,
//         phone: phone,
//         gender: gender,
//         city: city,
//       },
//     }
//   );

//   let avatar = "maleAvatar";

//   if (gender == "Female") {
//     avatar = "femaleAvatar";
//   }

//   return res.render("studentDetailCard.ejs", {
//     STAtus: "Updated",
//     AVAtar: avatar,
//     Sname: name,
//     Fname: fname,
//     GEnder: gender,
//     PHone: phone,
//     CIty: city,
//   });
// });

// /* get method */
// app.get("/", function (req, res) {
//   // res.render('index.ejs', {
//   //     ACCess: allowAccess
//   // })
// });

app.listen(port, () => {
  console.log(`Server Listening on Port: ${port}`);
});

// process.on("unhandledRejection", (err) => {
//   console.log("unhandled error is -----> " + err);
// });
