import React,{useState} from "react";
//import React,{Component} from "react"
import axios from "axios";
import galle from '../images/8.jpg'
//import axios from "axios";
//import {setErrors} from "./../components/setErrors";
 







function AddPackage2(){

  const [Uname,setName] = useState("");
  const [pId,setPid] = useState("");
  const [suggess,setSuggess] = useState("");
  const [fande,setFande] = useState("");
  const [rate,setRate] = useState("");
  const [date,setDate] = useState("");



  // (local function) sendData(e: any):void
  function sendData(e){
   e.preventDefault();
   
   const newFeedback={

    Uname,
    pId,
    suggess,
    fande,
    rate,
    date



   }
   axios.post("http://localhost:8070/feedback/add2",newFeedback).then(()=>{

     alert("Feedback Created Succsessfully")
   }).catch((err)=>{

     alert(err)

   })

  }

 return(

   <div className="container" class="p-3 mb-2 bg-dark text-white">
    <form onSubmit={sendData}>
    <h2 class="text-white-50 bg-success"><center>Fill the feedback form</center></h2><br></br>
    <img  src={galle} style={{ position:"absolute", right:100,top:100}} height={470} width={570}  alt="Card image cap"></img>
    <div className="form-group" style={{width:"700px"}}>
      <label for="Name">User Name</label>
      <input type="text" class="form-control" id="uname" placeholder="Enter your name here"
      onChange={(e)=> {

        setName(e.target.value);

       } }/>
  
    </div><br></br>
    
    <div className="form-group" style={{width:"700px"}}>
      <label for="id">Package ID</label>
      <input type="text" class="form-control" id="packId" placeholder="Enter package ID here"
       onChange={(e)=> {

        setPid(e.target.value);

       } }/>
      
      
  
    </div><br></br>
  
    <div className="form-group" style={{width:"700px"}}>
      <label for="desti">Any suggesions</label>
      <input type="text" class="form-control" id="suge" placeholder="Enter any suggestions here"
      onChange={(e)=> {

        setSuggess(e.target.value);

       } }/>
      
  
    </div><br></br>

    <div className="form-group" style={{width:"700px"}}>
      <label for="numDays">Faults and Errors</label>
      <input type="text" class="form-control" id="fane" placeholder="Enter any faults or errors here"
      onChange={(e)=> {

        setFande(e.target.value);

       } }/>

    
    </div><br></br>

    <div className="form-group" style={{width:"700px"}}>
      <label for="rate">Rate Package</label>
      <input type="text" class="form-control" id="rate" placeholder="You can Give Any Number 1 to 5"
      onChange={(e)=> {

        setRate(e.target.value);

       } }/>


     


</div>
<br></br>

    <div className="form-group" style={{width:"700px"}}>
      <label for="hotel">Date</label>
      <input type="date" class="form-control" id="date" placeholder="Enter date here"
      onChange={(e)=> {

        setDate(e.target.value);

       } }/>


    
    </div><br></br>

    <div class="d-grid gap-2 col-6 mx-auto"> 
    <button type="submit" class="btn btn-success" style={{width:"500px"}}><strong>Create Feedback</strong></button>
    <a href="/cfb" class="btn btn-secondary" style={{width:"500px"}}><strong>Manage Feedbacks(Edit/Delete)</strong></a>
    </div>
   </form>
   <a href="/search" class="btn btn-secondary"><strong>Previous Page</strong></a>
   </div>

//<a href="/search" class="btn btn-warning">GET MORE</a><br></br> 


 )




} 

export default AddPackage2