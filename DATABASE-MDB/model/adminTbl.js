const mongoose = require("mongoose")
const { type } = require("os")

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
    gender:{
        type:String,
        required:true
    },
    skills:{
        type:Array,
        required:true
    }
})

const adminTbl = mongoose.model("admin", adminSchema)

module.exports = adminTbl