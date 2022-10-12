//const router = require("express").Router();
const express=require('express');
let Package = require("../models/Package");

const router=express.Router();



//Add 1

router.route("/add").post((req,res)=>{

 const name = req.body.name; 
 const packId = req.body.packId; 
 const destination = req.body.destination;
 const numofdays= Number(req.body.numofdays);
 const nopass= Number(req.body.nopass); 
 const hotel = req.body.hotel; 
 const transport  = req.body.transport; 
 const tourGuide = req.body.tourGuide; 
 const totPrice  = req.body.totPrice;
 const photo  = req.body.photo; 

 const newPackage = new Package({
  name,
  packId,
  destination,
  numofdays,
  nopass,
  hotel,
  transport,
  tourGuide,
  totPrice,
  photo
 })

  newPackage.save().then(()=>{

     res.json("Package created!");


  }).catch((err)=>{

     console.log(err);

  })

}) 
  
//add 2
/*
router.post('/package/save',(req,res)=>{


 let newPackage = new Package(req,body);

 newPackage.save((err)=>{

    if(err){

     return res.status(400).json({

       error:err


     });
    }
     return res.status(200).json({

      success:"posts Saved Successfully"


     });

 });


}); */



//View data 1
/*
router.route("/").get((req,res)=>{

    Package.find().then((packages)=>{
    
      res.json(packages)
    
      }).catch((err)=>{
    
        console.log(err)
      })
    
    
    
}) */

//View Data 2

router.get('/all',(_req,res)=>{

    Package.find().exec((err,packages)=>{
        if(err){
      return res.status(400).json({
       error:err



      });


     }

      return res.status(200).json({

          success:true,
          existingPackages:packages


      });


    });



});




//Update 
router.route("/update/:id").patch(async(req,res)=>{

  const pk = await Package.findById(req.params.id);

if (pk) {
  pk.name = req.body.name || fb.name;
  pk.packId = req.body.packId || fb.packId;
  pk.destination = req.body.destination || fb.destination;
  pk.numofdays = req.body.numofdays || fb.numofdays;
  pk.nopass = req.body.nopass || fb.nopass;
  pk.hotel = req.body.hotel || fb.hotel;
  pk.transport = req.body.transport || fb.transport;
  pk.tourGuide = req.body.tourGuide || fb.tourGuide;
  pk.totPrice = req.body.totPrice || fb.totPrice;
  pk.photo = req.body.photo || fb.photo;
 
  const updatePackage = await pk.save();

  res.json({
      name: updatePackage.name,
      destination: updatePackage.destination,
      numofdays: updatePackage.numofdays,
      nopass: updatePackage.nopass,
      hotel: updatePackage.hotel,
      transport: updatePackage.transport,
      tourGuide: updatePackage.tourGuide,
      totPrice: updatePackage.totPrice,
      photo: updatePackage.photo
      
  });
} else {
  res.status(404);
  
  throw new Error("Can't Update Package Details");
}


})


//delete

router.route("/delete/:id").delete(async(req,res)=>{

  let pId =req.params.id;
  
  await Package.findByIdAndDelete(pId).then(()=> {
  
   res.status(200).send({status: "Package Deleted"});
   
   }).catch((err)=>{
  
  console.log(err.message);
  res.status(500).send({status: "Error with delete the Feedback", error:err.message});
  
   })
  
  
  
  })






//Retrive by ID 222
router.route("/get/:id").get(async(req,res)=>{
  const pk = await Package.findById(req.params.id);

if (pk) {
  res.json(pk);
} else {
  res.status(404).json({ message: "Package not found" });
}
})


module.exports = router;