const express = require("express")
const db = require("./config/db")
const adminTbl = require("./model/adminTbl")

const port = 3300

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded())

let edit = {
    id : ""
}

app.get("/edit", (req, res) => {
    let id = req.query.id
    
    adminTbl.findById(id)
    .then((sign) => {
        edit = sign
        res.redirect('/')
        return false
    })
    .catch((err) => {
        console.log(err)
        return false
    })

    console.log(edit)
})



app.get("/delete/:id", (req, res) => {
    let id = req.params.id
    adminTbl.findByIdAndDelete(id)
    .then((data) => {
        console.log("Data deleted successfully..." )
        res.redirect('/')
        return false
    })
    .catch((err) => {
        console.log(err)
        return false
    })
})

app.post("/insertData", (req, res) => {
    console.log(req.body)
    let editId = req.body.id
    
    const {name, email, phone, password, gender, skills} = req.body

    if(editId){
        adminTbl.findByIdAndUpdate(editId, {
            name : name,
            email : email,
            phone : phone,
            password : password,
            gender : gender,
            skills : skills
        })
        .then((data) => {
            edit={}
            console.log("Data edited succeseefully...")
            console.log(data)
            return res.redirect('/')
        })
        .catch((err) => {
            console.log(err)
            return false
        })
    }
    else{
        adminTbl.create({
        name,
        email,
        phone,
        password,
        gender,
        skills
    })
    .then((data) =>{
        console.log("data inserted successfully...")
        res.redirect('/')
        return false
    })
    .catch((err) => {
        console.log(err)
        return false
    })

    }
    
})


app.get("/", (req,res)=>{

    adminTbl.find().then((allData) => {
        return res.render("index",{
            data: allData,
            editData : edit
        })
    })
    .catch((err) => {
        console.log(err)
        return false
    })
})




app.listen(port, (err) => {
    if(err){
         console.log("Server is not connected...")
        return false
    }
    console.log("Server is connected to port ", + port)
       
})