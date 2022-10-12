const mongoose = require('mongoose');
const router = require('../routes/packages');

//const Schema=mongoose.Schema;

const packageSchema = new mongoose.Schema({

 

name :{
    type : String,
    required : true
     
},

packId :{
    type : String,
    required : true
     
},


destination:{

 type:String,
 required:true

},

numofdays:{

 type:Number,
 required : true

},

nopass:{

 type:Number,
 required : true
   
   
},

hotel :{
 type : String,
 required : false
     
},

transport :{
type : String,
 required : false
     
},

tourGuide :{
type : String,
required : false
     
},

totPrice :{
type : String,
required : true
     
},

photo :{

    type : [String],
   


},







})


const Package=mongoose.model("CreatePackages",packageSchema);

module.exports=Package;




