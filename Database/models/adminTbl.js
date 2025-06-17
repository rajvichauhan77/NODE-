const mongoose = require("mongoose")
const { type } = require("os")

const adminschema = mangoose.Schema({
    name:{
        type:String,
        required:true
    },
      email:{
        type:String,
        required:true
    }
})

const andmin = mongoose.model("admin",adminschema)

module.exports = admin
