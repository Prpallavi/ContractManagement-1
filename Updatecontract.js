import React, { useState } from 'react';
import './Updatecontract.css';
import './Header.js';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {Link,useNavigate,useLocation} from "react-router-dom";

function UpdateForm(props) {
  
const navigate=useNavigate()
 const location=useLocation();
  console.log(location.state);
 
   const[updateFname,setFname]=useState(location.state.firstname)
  const[updateCname,setCname]=useState(location.state.contractname)
  const[updateCtype,setCtype]=useState(location.state.contractype)
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
    <div class="title">Update Contract</div>
    <div class="content">
      <form action="/details" >
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" placeholder="first name" value={updateFname} onChange={(e) => {

setFname(e.target.value)

 }} />
            
          </div>
          
           
       
          <div class="input-box">
            <span class="details">Contract Name</span>
            <input type="text" placeholder="last name" value={updateCname} onChange={(e) => {

setCname(e.target.value)

 }}/> 
            
          </div>
          <div class="input-box">
            <span class="details">Contract Type</span>
            <select value={updateCtype} onChange={(e) => {

setCtype(e.target.value)

 }}>
             <option value="select">Contract Type</option>
                <option value="Insurance">Insurance</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Grooming">Grooming</option>
                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="HealthCare">HealthCare</option>
    
              </select>
        
          </div>
          <div class="input-box">
            <span class="details">Parties</span>
            <input type="text" placeholder="parties"value={updateparties} onChange={(e) => {

setparties(e.target.value)

 }}/> 
         
         
         
          </div>
          <div class="input-box">
            <span class="details">Amount</span>
            <input type="text" placeholder="amount" value={updateamount} onChange={(e) => {

setAmount(e.target.value)

 }}/> 
         
         
          </div>
          <div class="input-box">
            <span class="details">Start Date</span>
            <input type="date" placeholder="dd/mm/yyy"  value={updatesdate} onChange={(e) => {

setsdate(e.target.value)

 }} />
         
      
          </div>
          <div class="input-box">
            <span class="details">End Date</span>
            <input type="date" placeholder="dd/mm/yyy" value={updateedate} onChange={(e) => {

setedate(e.target.value)

 }}/>
</div>
        <div class="button">
            <input type="submit" value="Save"/>
          </div>
          <div class="button">
            <input type="submit" value="Update" onClick={()=>{updateTask()
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