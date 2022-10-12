import React,{useEffect, useState} from "react"
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";



export default function EditPack(){

  const [Uname, setUname] = useState("");
  const [pId, setPid] = useState("");
  const [suggess, setSuggess] = useState("");
  const [fande, setFande] = useState("");
  const [rate, setRate] = useState("");
  const [date, setDate] = useState("");


  const { id } = useParams();

  useEffect(() => {
      getFeedbacks();
    }, []);
  
    //let navigate= useNavigate();
  
    function getFeedbacks() {
      let feedback = true;
  
      fetch(`http://localhost:8070/feedback/get/${id}`)
        .then((res) => res.json())
  
        .then((result) => {
          if (feedback) {
            setUname(result.Uname);
            setPid(result.pId);
            setSuggess(result.suggess);
            setFande(result.fande);
            setRate(result.rate);
            setDate(result.date);
           
          }
          console.log(result);
        });
  
      return () => (feedback = false);
    }

  
  function updateData(e){

      e.preventDefault();

      //alert("Insert");

      const updateFeedback ={
        Uname,
        pId,
        suggess,
        fande,
        rate,
        date
      }

      axios
    .patch(`http://localhost:8070/feedback/update/${id}`, updateFeedback)
    .then((_res) => {
      alert("Payment Updated Successfully!");
     // navigate("/front");
      console.log(updateFeedback);
    })
    .catch((_err) => {
      
      alert("Database Error");
    });
  }



return(
    <div className="container">
        <h2 class="text-white-50 bg-dark"><center>Update Feedback Details</center></h2><br></br><br></br>
        <form className =  "feedback">
        <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">User Name</label>
                    <input type="text" className="form-control" id="uname" placeholder="User Name" value={Uname} onChange={(e)=>{setUname(e.target.value);}}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="iinputPid">Package ID</label>
                    <input type="text" className="form-control" id="Pid" placeholder="Package ID" value={pId} onChange={(e)=>{setPid(e.target.value);} }/>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputSugges">Suggestions</label>
                    <input type="text" className="form-control" id="suggest" placeholder="Enter any suggestions" value={suggess} onChange={(e)=>{setSuggess(e.target.value);} }/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputFande">Faliors and Errors</label>
                    <input type="text" className="form-control" id="fande" placeholder="Faliors and Errors" value={fande} onChange={(e)=>{setFande(e.target.value);} }/>
                </div>
            </div>

          
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputRate">Rate US</label>
                    <input type="text" className="form-control" id="rate" placeholder="Enter your Rate" value={rate} onChange={(e)=>{setRate(e.target.value);} }/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputDate">Date</label>
                    <input type="text" className="form-control" id="date" placeholder="DD/MM/YY" value={date}  onChange={(e)=>{date(e.target.value);} }/>
                </div>
            </div>

        
            
        </form><br></br><div>
                 <a href="/cfb" class="btn btn-info" style={{width:"300px"}}><strong><i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Privious Page</strong></a>&nbsp;&nbsp;
                <button  type="button" class="btn btn-success"   onClick={updateData}> <i className="fa-solid fa-wrench "></i>&nbsp;&nbsp; Update Feedback&nbsp;&nbsp;&nbsp;</button>&nbsp;&nbsp;
           
            </div>
            
            
 </div> 
 )

}




