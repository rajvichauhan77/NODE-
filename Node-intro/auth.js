 
 const auth = {
    login : () => {
        console.log("login succsessful...")
    },
    logout : () => {
        console.log("logout succsessful...")
    },
    date : () => {
        let data = new Date()
        console.log(data)
    },
    details : {
        title: "abcd",
        cred: "999"
    }
 }

 module.exports = auth; 