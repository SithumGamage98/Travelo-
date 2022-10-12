const mongoose = require('mongoose');
const router = require('../routes/feedbacks');

//const Schema=mongoose.Schema;

const feedBackSchema = new mongoose.Schema({

 

Uname :{
    type : String,
    required : true
     
},

pId :{
    type : String,
    required : true
     
},



suggess:{

 
 type:String,
 required:true


},

fande:{

 
    type:String,
    required:true
   
   
   },





rate:{

 type:Number,
 required:true
 


},

date:{

    type:String,
    required : true
   
   
},








})




const FeedBack=mongoose.model("feedbacks",feedBackSchema);

module.exports=FeedBack;




