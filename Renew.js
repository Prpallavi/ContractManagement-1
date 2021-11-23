import React, { useState } from 'react';
import './Updatecontract.css';
import './Header.js';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {Link,useNavigate,useLocation} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Renewform(props) {
  
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
    axios.post('http://localhost:9090/add',{
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
            <input type="text" placeholder="contract type" value={updateCtype} onChange={(e) => {

setCtype(e.target.value)

 }}/>
           
        
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
          <input type="date" placeholder="dd/mm/yyy"  style={{marginRight:"100%"}} value={updatesdate} onChange={(e) => {

setsdate(e.target.value)


 }} />
  {/* <DatePicker selected={updatesdate} onChange={date => setsdate(date)}/> */}
         
      
          </div>
          <div class="input-box">
            <span class="details">End Date</span>
            <input type="date" placeholder="dd/mm/yyy" value={updateedate} onChange={(e) => {

setedate(e.target.value)

 }}/>
</div>


<div class="button">
           
          </div>
          <div class="button">
            <input type="submit" value="Renew" onClick={()=>{updateTask()
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
export default Renewform;