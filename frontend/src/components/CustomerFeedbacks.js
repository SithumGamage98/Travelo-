import React,{Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
//import Package from "../../../TourPackage/BACKEND/models/Package";



export default class CusFeedBacks extends Component{


   constructor(props){

       super(props);

       this.state={

        feedbacks:[]
       };

   }
  componentDidMount(){

   this.retriveFeedbacks();
  }
  retriveFeedbacks(){

   axios.get("http://localhost:8070/feedback/allFB").then(res=>{

      if(res.data.success){
          this.setState({

            feedbacks:res.data.existingFeedbacks

          });

          console.log(this.state.feedbacks)

      }


   })



  }



  
     
  

  //Filter 
 filterContent(_feedbacks,searchTerm){

    const results=_feedbacks.filter((feedbacks)=>feedbacks.Uname.toLowerCase().includes(searchTerm));
    this.setState({feedbacks:results});

 }


  
  handleTextSearch=(e)=>{

     const searchTerm=e.currentTarget.value;
     axios.get("http://localhost:8070/feedback/allFB").then(res=>{

      if(res.data.success){
         this.filterContent(res.data.existingFeedbacks,searchTerm)
      }
  });

}; 







    


  



 render(){

    return(

        
        <div className="container">  
        <div class="p-3 mb-2 bg-dark text-white">
      
        
        <div className="row">
         <div className="col-lg-9 mt-2 mb-2">
            <h3><strong>Search your user name here</strong></h3>
            
  
         </div>
         <br></br>
         <div className="col-lg-3 mt-2 mb-2" class="text-center">
            
          
               <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchTerm"
                onChange={this.handleTextSearch}
               
               ></input>
  
  
         </div>
         
       </div>



      <div className="container" class="p-3 mb-2 bg-dark text-white">

      <h1><center><strong>All Feedbacks</strong></center></h1>
      <table class="table table-bordered" class="p-3 mb-2 bg-dark text-white" >
      <thead>
      <tr>
           <th scope="col">Count</th>
           <th scope="col">User Name</th>
           <th scope="col">Selected Package ID</th>
           <th scope="col">suggesions</th>
           <th scope="col">Faults and Errors</th>
           <th scope="col">Rating</th>
           <th scope="col">Date</th>
           <th scope="col">Action</th>
        
  
      </tr>
     </thead>
     <tbody>

       {this.state.feedbacks.map((feedbacks,index)=>(

        <tr>
          <th scope="row">{index+1}</th>
          <td>{feedbacks.Uname}</td>
          <td>{feedbacks.pId}</td>
          <td>{feedbacks.suggess}</td>
          <td>{feedbacks.fande}</td>
          <td>{feedbacks.rate}</td>
          <td>{feedbacks.date}</td>
         
         
             
         <td>
         <a className="btn btn-success" href = {`/fbupd/${feedbacks._id}`} >Edit Feedback</a>
                                </td>
              
         

        </tr>

       ))}



     </tbody>



     </table>
     <a href="/fb" class="btn btn-secondary"><strong>Previous Page</strong></a>
      </div>

    
     </div></div>
    ) 
 }

 }