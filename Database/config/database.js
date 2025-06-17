const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017")

const db = mongoose.connection

db.on("connected", (err) => {
    if(err){
        console.log(err)
        return false
    }
    console.log("db is not connected")
})

module.exports = db