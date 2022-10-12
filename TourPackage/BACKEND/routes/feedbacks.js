const express=require('express');
let FeedBack = require("../models/FeedBack");

const router=express.Router();



//Add 1

router.route("/add2").post((req,res)=>{

    const Uname = req.body.Uname; 
    const pId = req.body.pId; 
    const suggess = req.body.suggess;
    const fande= req.body.fande;
    const rate= Number(req.body.rate); 
    const date= req.body.date; 
  
  
   
   
   
   
    const newFeedback = new FeedBack({
   
        Uname,
        pId,
        suggess,
        fande,
        rate,
        date
   
     
   
   
   
    })
   
    newFeedback.save().then(()=>{
   
        res.json("Feedback Create Succsessfully!");
   
   
     }).catch((err)=>{
   
        console.log(err);
   
     })
   
   }) 




   //View Data 2

router.get('/allFB',(_req,res)=>{

    FeedBack.find().exec((err,feedbacks)=>{
        if(err){
      return res.status(400).json({
       error:err



      });


     }

      return res.status(200).json({

          success:true,
          existingFeedbacks:feedbacks


      });


    });



});


//delete

router.route("/delete/:id").delete(async(req,res)=>{

    let pId =req.params.id;
    
    await FeedBack.findByIdAndDelete(pId).then(()=> {
    
     res.status(200).send({status: "Feedback Deleted"});
     
     }).catch((err)=>{
    
    console.log(err.message);
    res.status(500).send({status: "Error with delete the Feedback", error:err.message});
    
     })
    
    
    
    })



//Update 22

router.route("/update/:id").patch(async(req,res)=>{

    const fb = await FeedBack.findById(req.params.id);

  if (fb) {
    fb.Uname = req.body.Uname || fb.Uname;
    fb.pId = req.body.pId ||  fb.pId;
    fb.suggess = req.body.suggess || fb.suggess;
    fb.fande = req.body.fande || fb.fande;
    fb.rate = req.body.rate || fb.rate;
    fb.date = req.body.date || fb.date;
   
    const updatefeedback = await fb.save();

    res.json({
        Uname: updatefeedback.Uname,
        pId: updatefeedback.pId,
        suggess: updatefeedback.suggess,
        fande: updatefeedback.fande,
        rate: updatefeedback.rate,
        date: updatefeedback.date,
        
    });
  } else {
    res.status(404);
    
    throw new Error("Can't Update Feedback Details");
  }


})



//Retrive by ID
router.route("/get/:id").get(async(req,res)=>{
    const fb = await FeedBack.findById(req.params.id);

  if (fb) {
    res.json(fb);
  } else {
    res.status(404).json({ message: "Package not found" });
  }
})



   module.exports = router;