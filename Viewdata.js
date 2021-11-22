import React, { useEffect, useState } from 'react';
import './Viewdata.css';
import './Header.js';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {Link,useNavigate,useLocation} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function View(props) {
  const[newdata,setNewdata]=useState([]);
   
const navigate=useNavigate()
 const location=useLocation();
 

   
   const[updateFname,setFname]=useState(location.state.firstname)
  const[updateCname,setCname]=useState(location.state.contractname)
  const[updateCtype,setCtype]=useState(location.state.contracttype)
  const[updateamount,setAmount]=useState(location.state.amount)
  const[updateparties,setparties]=useState(location.state.parties)
  const[updatesdate,setsdate]=useState(location.state.startdate)
  const[updateedate,setedate]=useState(location.state.enddate) 
  const page=()=>{

    navigate('/details')

  }
  const viewTask =()=>{
    axios.put('http://localhost:9000/update_contract',{
        _id:location.state._id,
        firstname:updateFname,
        contractname: updateCname,
        contracttype:updateCtype,
    parties: updateparties,
    amount: updateamount,
    startdate: updatesdate,
    enddate:updateedate
    }).then((res)=>{
      console.log(res)
    page()
    })
    
}      









 /*   const {register, handleSubmit,handleChange,formState:{errors,reset},setValue} = useForm();
const onSubmit=(data)=>{axios.put("http://localhost:9090/update_contract",
{Fileddata:data} 
).then((res)=>{console.log(res.data)
 })}  */
  const [diff,setdiff]=useState("");
 const[Errordiff,setErrordiff]=useState("");
 let today = new Date(Date.now()).toLocaleDateString();
            let expire = new Date(updateedate);
            let difference = new Date(expire).getTime() - new Date(today).getTime();
            let daysleft= difference / (1000 * 3600 * 24);
            console.log(daysleft);
            
  

   if(daysleft<0)
  {
    alert("CONTRACT EXPIRED,RENEW YOUR CONTRACT!")
  }
  else if(daysleft<30){
    alert("CONTRACT EXPIRING SOON")
  }
  else{
    alert("CONTRACT RUNNING")
  }  
 
    return( 
      <div className="bdy">
        <div class="container">
    <div class="title">View Contract</div>
    <div class="vcontent">
      <form>
        <div class="user-details">
          <div class="vinput-box">
         
            <span class="details" style={{fontWeight:"bold"}}>First Name</span>
           <p>{updateFname}</p>
            
          </div>
          
          
       
          <div class="vinput-box">
            <span class="details" style={{fontWeight:"bold"}}>Contract Name</span>
           <p>{updateCname} </p>
            
          </div>
          <div class="vinput-box">
            <span class="details"style={{fontWeight:"bold"}}>Contract Type</span>
           <p>{updateCtype} </p>
           
        
          </div>
          <div class="vinput-box">
            <span class="details"style={{fontWeight:"bold"}}>Parties</span>
            <p>{updateparties} 

 </p>
            </div>
          <div class="vinput-box">
            <span class="details"style={{fontWeight:"bold"}}>Amount</span>
            <p > {updateamount} </p> 
         
         
          </div>
          <div class="vinput-box">
            <span class="details"style={{fontWeight:"bold"}}>Start Date</span>
         <p> {updatesdate}</p>
          </div>
          <div class="vinput-box"style={{marginRight:"300px"}}>
            <span class="details"style={{fontWeight:"bold"}}>End Date</span>
             <p>{updateedate} </p>
          <br/>
            
</div>


          
{/* <div class="button">
            <input type="submit" value="Ok"  onClick={(e) => alert(e)}/>
          </div>  */}


             <div class="button">
            <input type="submit" value="Back" onClick={() =>page()}/> 
          </div> 
          </div>
        </form>
       
        </div>
    </div>
    </div>
    );
}
export default View;