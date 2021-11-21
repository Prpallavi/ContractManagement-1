import React, { useState } from 'react';
import './Viewdata.css';
import './Header.js';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {Link,useNavigate,useLocation} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function UpdateForm(props) {
  
const navigate=useNavigate()
 const location=useLocation();
  console.log(location.state);
 
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
    axios.put('http://localhost:9090/update_contract',{
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
    alert("EXPIRED")
  }
  else if(daysleft<30){
    alert("EXPIRING ON",daysleft)
  }
  else{
    alert("RUNNING")
  }

    return(
      <div className="bdy">
        <div class="container">
    <div class="title">View Contract</div>
    <div class="vcontent">
      <form>
        <div class="user-details">
          <div class="vinput-box">
            
            <span class="details">First Name</span>
           <h4>{updateFname}</h4>
            
          </div>
          
           
       
          <div class="vinput-box">
            <span class="details">Contract Name</span>
           <h4>{updateCname} </h4>
            
          </div>
          <div class="vinput-box">
            <span class="details">Contract Type</span>
           <h4>{updateCtype} </h4>
           
        
          </div>
          <div class="vinput-box">
            <span class="details">Parties</span>
            <h4>{updateparties} 

 </h4>
            </div>
          <div class="vinput-box">
            <span class="details">Amount</span>
            <h4> {updateamount} </h4> 
         
         
          </div>
          <div class="vinput-box">
            <span class="details">Start Date</span>
         <h4> {updatesdate}</h4>
          </div>
          <div class="vinput-box"style={{marginRight:"300px"}}>
            <span class="details"  >End Date</span>
             <h4>{updateedate} </h4>
   

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
export default UpdateForm;