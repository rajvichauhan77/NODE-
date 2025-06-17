const express = require("express")
const db = require("./config/db")
const adminTbl = require("./model/adminTbl")

const port = 3300

const app = express()

app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render('index')
})

app.listen(port, (err) => {
    if(err){
         console.log("Server is not connected...")
        return false
    }
    console.log("Server is connected to port ", + port)
       
})