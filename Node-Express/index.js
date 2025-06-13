const express = require("express")

const app = express();

const port = 8000


let data = [
    {
        id:1,
        name: "Rajvi",
        email: "rajvi@gmail.com",
        number: "999"
    },
        {
        id:2,
        name: "Manthan",
        email: "manthan@gmail.com",
        number: "333"
    },
        {
        id:3,
        name: "Jdiya",
        email: "jd@gmail.com",
        number: "123"
    }
]

app.use(express.urlencoded())

app.set("view engine", "ejs")



app.get("/edit", (req, res) => {
    let user = data.find((ele) => ele.id == req.query.id)
    res.render("Update", {user

    })
})

app.get("/delete", (req, res) => {
    let userId = req.query.id
    data= data.filter((ele) => ele.id != userId)
    res.redirect('/')
})

app.post('/insert' , (req, res)=> {
    data.push(req.body)
    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render("form", {
        students : data
    })
})




app.listen(port, (err)=> {
    if(err){
        console.log("server is not connected...")
        return false
    }
    console.log("connected to port " + port)
})