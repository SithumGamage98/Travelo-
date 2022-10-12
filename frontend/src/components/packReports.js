import React,{Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import galle from '../images/Travelo.jpeg'
import "./../Style.css";
//import Package from "../../../TourPackage/BACKEND/models/Package";



export default class packRepo extends Component{


   constructor(props){

       super(props);

       this.state={

        packages:[]
       };

   }
  componentDidMount(){

   this.retrivePackages();
  }
  retrivePackages(){

   axios.get("http://localhost:8070/package/all").then(res=>{

      if(res.data.success){
          this.setState({

            packages:res.data.existingPackages

          });

          console.log(this.state.packages)

      }


   })



  }
 

  repotGen=()=>{

    window.print();

}
  
     
  






 render(){

    return(

      <div className="container">
       <br></br>
   <div style={{ position:"absolute", right:20,top:10}}> <div class="header3"><img class="logo" src={galle} style={{ position:"absolute", right:1280,top:15}} height={50} width={200}  alt="Card image cap"></img>
     <a class="btnHome2" href="/man"  style={{ position:"absolute", right:120,top:20}}>Home</a>
     <div> <h1><strong><center>Manage package details</center></strong></h1><br></br></div></div> </div>
    <br></br><br></br><br></br><br></br>
     
     
      <table class="table table-white table-white">
      <thead>
      <tr class="tableHeaders2">
           <th scope="col">Count</th>
           <th scope="col">PackageName</th>
           <th scope="col">PackageID</th>
           <th scope="col">Destination</th>
           <th scope="col">NumberofDays</th>
           <th scope="col">NumberofPassengers</th>
           <th scope="col">Hotel</th>
           <th scope="col">Transport</th>
           <th scope="col">TourGuide</th>
           <th scope="col">TotalPrice(Rs)</th>
        
  
  
      </tr>
     </thead>
     <tbody>

       {this.state.packages.map((packages,index)=>(

        <tr class="rows5">
          <th scope="row">{index+1}</th>
          <td>{packages.name}</td>
          <td>{packages.packId}</td>
          <td>{packages.destination}</td>
          <td>{packages.numofdays}</td>
          <td>{packages.nopass}</td>
          <td>{packages.hotel}</td>
          <td>{packages.transport}</td>
          <td>{packages.tourGuide}</td>
          <td>{packages.totPrice}</td>

       </tr>

       ))}

     </tbody>



     </table>
    
     <td></td>
    
     <button class="btnReport" onClick={this.repotGen}>Print</button><br></br>
     
<br></br>
     <div class="card-body" style={{ position:"absolute", right:14,top:600} }>
  <h5 class="text-dark"><center><strong>Travelo</strong></center></h5>
  <p class="text-white"><center>copyright @2020 Travelo All rights are reserved</center></p>
  </div>
  <div class="card-footer text-muted">
    
  </div>
   
      </div>

    

    ) 
 }

 }