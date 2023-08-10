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
        id : req.body.id ,
        name : req.body.name , 
        email : req.body.email , 
        password : req.body.password , 
    })
 
    newuser.save() ; //save in database
    res.status(200).json({message : "signin succesfull"}) ;
    res.send("Auth complete")
})

//login 
app.get("/login" , (req,res) => { 
    res.send("Enter your login details");
})


app.post("/login" ,(req, res) => {
    const {name,email,password} = req.body;
    const user = names.find({email}).then((result) =>{
        if(result){
            // res.json(result);
            res.send("login successful")
        }
        else{
            res.send("No user found")
        }
    }).catch((err) => { 
        res.status(404).send("Invalid credentials")
    })
  });

app.listen(3000,()=>{
    console.log("3000 port is working") ;
})