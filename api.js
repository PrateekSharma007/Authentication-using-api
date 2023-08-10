const express = require("express") ; 
const app = express();
const mongoose = require("mongoose") ;
const db = require("./mongodb") ; 
const names = require("./mongodbSchema")



app.use(express.json({limit : '5mb'}));
app.use(express.urlencoded({extended : true}));

//welcome page 

app.get("/" ,(req,res) => {
    res.send("Welcome to the authentication");
})

//making up of sign up
app.get("/signin" ,(req,res) => {
    
    res.send("Checking for your sign up")
})


app.post("/signin" ,(req,res) =>{
    
    const {name,email,password} = req.body ; //destructure
    const newuser = names({
        name : req.body.name , 
        email : req.body.email , 
        password : req.body.password , 
    })
 
    newuser.save() ; //save in database
    res.json()
})


app.listen(3000,()=>{
    console.log("3000 port is working") ;
})