import React, { useState } from 'react';
import './Updatecontract.css';
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
  const updateTask =()=>{
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
    return(
      <div className="bdy">
        <div class="container">
    <div class="title">View Contract</div>
    <div class="content">
      <form action="/details" >
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
           <h3>{updateFname}</h3>
            
          </div>
          
           
       
          <div class="input-box">
            <span class="details">Contract Name</span>
           <h3>{updateCname} </h3>
            
          </div>
          <div class="input-box">
            <span class="details">Contract Type</span>
           <h3>{updateCtype} </h3>
           
        
          </div>
          <div class="input-box">
            <span class="details">Parties</span>
            <h3>{updateparties} 

 </h3>
            </div>
          <div class="input-box">
            <span class="details">Amount</span>
            <h3> {updateamount} </h3> 
         
         
          </div>
          <div class="input-box">
            <span class="details">Start Date</span>
         <h3> {updatesdate}</h3>
          </div>
          <div class="input-box">
            <span class="details">End Date</span>
           <h3>{updateedate} </h3>
</div>
          
       
<div class="button">
            <input type="submit" value="Back" onClick={()=>{updateTask()
                         setFname('')
                        setCname('')
                        setCtype('')
                        setAmount('')
                        setparties('')
                        setsdate('')
                        setedate('') 
                        }}/>
          </div>
          </div>
        </form>
       
        </div>
    </div>
    </div>
    );
}
export default UpdateForm;