const mongoose= require("mongoose")

//  Creating Schema
const stuSchema= new mongoose.Schema({
    name: String,
    fname: String,
    city: String,
    phone: Number,
    gender: Number,
})

//  Creating collection named: "students"
const stuColl= mongoose.model("Student", stuSchema);

module.exports= stuColl