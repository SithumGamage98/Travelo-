import React,{Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import tour from '../images/tour.jpg'
import '../App.css';

//import Package from "../../../TourPackage/BACKEND/models/Package";



export default class S_AllCusPacz extends Component{


   constructor(props){

       super(props);

       this.state={

       cusPacks:[]
       };

   }
  componentDidMount(){

   this.retriveCusPacks();
  }
  retriveCusPacks(){

   axios.get("http://localhost:8070/cusPack/all4").then(res=>{

      if(res.data.success){
          this.setState({

            cusPacks:res.data.existingCusPacks

          });

          console.log(this.state.cusPacks)

      }


   })

  }

  onDelete(id){

     fetch(`http://localhost:8070/cusPack/delete/${id}`,{

           method:`DELETE`



     }).then((result)=>{

         result.json().then((resp)=>{

           console.warn(resp)
           alert("Package Cancelled...!!")
           this.retriveCusPacks()

         })


     }) 
    


  }

  //Filter /Search Mechod
 filterContent(cusPacks,searchTerm){

  const results=cusPacks.filter((cusPacks)=>cusPacks.name.toLowerCase().includes(searchTerm));
  this.setState({cusPacks:results});

}



handleTextSearch=(e)=>{

   const searchTerm=e.currentTarget.value;
   axios.get("http://localhost:8070/cusPack/all4").then(res=>{

    if(res.data.success){
       this.filterContent(res.data.existingCusPacks,searchTerm)
    }
});

}; 





  
 render(){

    return(
    <div>
      <div className="container" class="p-3 mb-2 bg-white">
      <div class="header2"></div>
      <div class="header"> <h1 class="header" style={{position:"absolute",top:40 ,right:450}}><strong><center>Create my tour packages</center></strong></h1><br></br></div><br></br><br></br>
     
   
     {this.state.cusPacks.map((cusPacks,index)=>(


  
  <ul > <div class = "row row-cols-7 row-cols-md-3 g-4"> <div class="card4" >
   <div class="SeeAllCuzPacks"><center>
    <li><div class="si">Name</div> {cusPacks.name}</li>
    <li class="list-group-item"><div class="si">Email</div>{cusPacks.email}</li>
    <li class="list-group-item"><div class="si">Phone</div>{cusPacks.phone}</li>
    <li class="list-group-item"><div class="si">Arriaval Date</div> {cusPacks.arriDate}</li>
    <li class="list-group-item"><div class="si">Pickup place</div>{cusPacks.pickPlace}</li>
    <li class="list-group-item"><div class="si">Destination</div>{cusPacks.destination}</li>
    <li class="list-group-item"><div class="si">Number of days</div>{cusPacks.NofDays}</li>
    <li class="list-group-item"><div class="si">Notes</div>{cusPacks.notes}</li>
  </center>
   
  
</div>  
  </div>     


 <div style={{ position:"relative", right:10,top:400}}><a className="btn btn-success" class="BtnUpdateSp"  href={`/updCuz/${cusPacks._id}`}>Update</a> <br></br><br></br>
 <a  class="BtnDeleSp" onClick={()=>this.onDelete(cusPacks._id)}>&nbsp;Cancel</a> </div>
 </div>
  </ul>

     ))}
     <div>
      <a href="/cuz" class="btn btn-success" style={{width:"300px"}}><strong><i className="fa-solid fa-user-clock"></i>&nbsp;&nbsp;Priviouse Page</strong></a></div> 
  </div>
     
   

  </div>

    ) 
 }

 }