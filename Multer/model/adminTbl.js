
const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
     name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
})

const adminTbl = mongoose.model("admin", adminSchema);

module.exports = adminTbl
