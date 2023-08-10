const mongoose = require("mongoose") ; 
const model = require("mongoose") ; 


const n = mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    email : {
        type : String,
        required : true
    },
    password : { 
        type : String , 
        required : true 
    }
})



module.exports = mongoose.model("names",n);