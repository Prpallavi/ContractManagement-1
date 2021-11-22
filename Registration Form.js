import React,{ useState,useEffect } from 'react';
import './Registration Form.css';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


/* import { Link } from 'react-router-dom'; */
function Form() {


let validmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 /*  const validEmail = new RegExp(
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
 ); */
  let validmobile=/^[6-9]\d{9}$/
  let history = useNavigate();
  const[Fname,setFname]=useState(() =>{
    const saved = localStorage.getItem("firstname");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  const[Cname,setCname]=useState(() =>{
    const saved = localStorage.getItem("contractname");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  
  const[Ctype,setCtype]=useState(() =>{
    const saved = localStorage.getItem("contracttype");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  const[amount,setAmount]=useState(() =>{
    const saved = localStorage.getItem("amount");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  const[parties,setparties]=useState(() =>{
    const saved = localStorage.getItem("parties");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  const[sdate,setsdate]=useState(() =>{
    const saved = localStorage.getItem("startdate");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  const[edate,setedate]=useState(() =>{
    const saved = localStorage.getItem("enddate");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  }) 
  const[lname,setlname]=useState(() =>{
    const saved = localStorage.getItem("lastname");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  }) 
  const[gender,setgender]=useState(() =>{
    const saved = localStorage.getItem("gender");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  }) 
  const[email,setemail]=useState(() =>{
    const saved = localStorage.getItem("email");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  }) 
  const[mobile,setmobile]=useState(() =>{
    const saved = localStorage.getItem("mobile");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  }) 
  const[comp,setcomp]=useState(() =>{
    const saved = localStorage.getItem("company");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  }) 
  const[dept,setdept]=useState(() =>{
    const saved = localStorage.getItem("department");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  }) 
  const[ufile,setufile]=useState([])
  /* () =>{
    const saved = localStorage.getItem("file");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })  */
  const[adrs,setadrs]=useState(() =>{
    const saved = localStorage.getItem("address");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  const[desc,setdesc]=useState(() =>{
    const saved = localStorage.getItem("description");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  useEffect(() => {
    // storing input name
    localStorage.setItem("firstname", JSON.stringify(Fname));
    localStorage.setItem("contractname", JSON.stringify(Cname));
    localStorage.setItem("contracttype", JSON.stringify(Ctype));
    localStorage.setItem("parties", JSON.stringify(parties));
    localStorage.setItem("amount", JSON.stringify(amount));
    localStorage.setItem("startdate", JSON.stringify(sdate));
    localStorage.setItem("enddate", JSON.stringify(edate));
    localStorage.setItem("lastname", JSON.stringify(lname));
    localStorage.setItem("gender", JSON.stringify(gender));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("mobile", JSON.stringify(mobile));
    localStorage.setItem("company", JSON.stringify(comp));
    localStorage.setItem("department", JSON.stringify(dept));
  /*   localStorage.setItem("file", JSON.stringify(ufile)); */
    localStorage.setItem("address", JSON.stringify(adrs));
    localStorage.setItem("description", JSON.stringify(desc));
  }, [Fname,Cname,Ctype,parties,amount,sdate,edate,lname,gender,email,mobile,comp,dept,adrs,desc]);
  
  

 /*  details.append("firstname",Fname); */
 

  const[ErrorFname,setErrorFname]=useState("")
  const[ErrorCname,setErrorCname]=useState("")
  const[ErrorCtype,setErrorCtype]=useState("")
  const[Erroramount,setErrorAmount]=useState("")
  const[Errorparties,setErrorparties]=useState("")
  const[Errorsdate,setErrorsdate]=useState("")
  const[Erroredate,setErroredate]=useState("") 
  const[Errorlname,setErrorlname]=useState("") 
  const[Errorgender,setErrorgender]=useState("") 
  const[Erroremail,setErroremail]=useState("") 
  const[Errormobile,setErrormobile]=useState("") 
  const[Errorcomp,setErrorcomp]=useState("") 
  const[Errordept,setErrordept]=useState("")
  const[Errorufile,setErrorufile]=useState("")  
  const[Erroradrs,setErroradrs]=useState("")
  const[Errordesc,setErrordesc]=useState("")
  const reset=()=>{
    localStorage.clear()
    window.location.reload();
  }
 /*  const Reset=()=>{
    setFname("")
    setlname("")
    setgender("")
    setemail("")
    setmobile("")
    setCname("")
    setCtype("")
    setparties("")
    setAmount("")
    setsdate("")
    setedate("")
    setcomp("")
    setdept("")
    setadrs("")
    setdesc("")
    setufile("")
   
  } */
     
    

  const FormValidation =()=>{ axios.post("  http://localhost:9090/add",
   {firstname:Fname,contractname:Cname,contracttype:Ctype,parties:parties,amount:amount,startdate:sdate,enddate:edate,lastname:lname,gender:gender,
  email:email,mobile:mobile,companyname:comp,department:dept,file:ufile,address:adrs,description:desc}  
).then((res)=>{console.log(res.data)
  history('/details')})

}
 
/* const startdate = `${sdate.getMonth()+1}/${sdate.getDate()}/${sdate.getFullYear()}`;
console.log(startdate);

const enddate = `${edate.getMonth()+1}/${sdate.getDate()}/${edate.getFullYear()}`;
console.log(enddate); */
 

/* let optionItems = Ctype.map((ct) =>
<option key={ct.contracttype}>{ct.contracttype}</option>
); */

/*   console.log(data) */
const validate = (e) => 
{

  e.preventDefault()

  if(Fname==="" || Cname==="" || Ctype==="" || parties===""|| amount===""||  sdate===""|| edate===""|| lname===""||
  gender===""||email===""|| mobile===""|| comp===""|| dept===""|| ufile===""|| adrs===""|| desc==="")
  {
    if(Fname === ""){
      setErrorFname("*ENTER THE FIRST NAME")
    }
    else{
      setErrorFname("")
    }
    if(Cname === ""){
      setErrorCname("*ENTER THE CONTRACT NAME")
    }
    else{
      setErrorCname("")
    }
    if(Ctype === ""){
      setErrorCtype("*SELECT CONTRACT TYPE")
    }
    else{
      setErrorCtype("")
    }
    if(parties === ""){
      setErrorparties("*ENTER THE PARTIES")
    }
    else{
      setErrorparties("")
    }
    if (amount === "") {

      setErrorAmount("*ENTER THE AMOUNT")

  }
  else {
      setErrorAmount("")
  }
  if (sdate === "") {
    setErrorsdate("*CHOOSE THE START DATE")
  }
  else {
    setErrorsdate("")
  }
  if (edate === "") {
    setErroredate("*CHOOSE THE DATE GREATER THAN STARTDATE")
  }
  else {
    setErroredate("")
  }
    if(lname === ""){
      setErrorlname("*ENTER YOUR LAST NAME")
    }
    else{
      setErrorlname("")
    }
    if(gender === ""){
      setErrorgender("*ENTER YOUR GENDER")
    }
    else{
      setErrorgender("")
    }
    if(email === ""){
        setErroremail("*ENTER  EMAIL ID")
      }
      else if(validmail.test(email)===false)
        {
          setErroremail('Enter valid Email')
        }
      
    else{
      setErroremail("")
    }
    if(mobile === "" ){
      setErrormobile("*ENTER MOBILE NUMBER")
      }
    else if (!validmobile.test(mobile)===true){
        setErrormobile("*ENTER VALID MOBILE NUMBER")
      }
    
   
    else{
      setErrormobile("")
    }
    if(comp === ""){
      setErrorcomp("*ENTER THE COMPANY NAME")
    }
    else{
      setErrorcomp("")
    }
    if(dept === ""){
      setErrordept("*ENTER YOUR DEPARTMENT")
    }
    else{
      setErrordept("")
    }
    if(ufile === ""){
      setErrorufile("*CHOOSE THE FILE ")
    }
    else{
      setErrorufile("")
    }
    if(adrs === ""){
      setErroradrs("*ENTER YOUR ADDRESS")
    }
    else{
      setErroradrs("")
    }

   
    if (desc === ""){
      setErrordesc("*ENTER THE DESCRIPTION")
    }
    else{
      setErrordesc("")
    }
   
  }

 else{
  FormValidation()

 } 

}



    return(
      <div>
      <div className="formbdy">
<div class="container">    
    <div class="title">Registration</div>
    <div class="content">
      <form onsubmit="return validateForm()" method="post" encType="multipart/form-data">
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" placeholder="first name"  value={Fname} style={{borderColor:ErrorFname=== "" ?"#004680":'red'}} onChange={(e) => {

setFname(e.target.value)

setErrorFname("") }} />
<div style={{color:"red",fontSize:"15px"}}>{ErrorFname === "" ? "" : ErrorFname}</div>  
         </div>
         <div class="input-box">
            <span class="details">Last Name</span>
            <input type="text" placeholder="last name" value={lname} style={{borderColor:Errorlname=== "" ?"#004680":'red'}} onChange={(e) => {

setlname(e.target.value)

setErrorlname("") }}/>
<div style={{color:"red",fontSize:"15px"}}>{Errorlname === "" ? "" : Errorlname}</div>  
   
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <input type="text" placeholder="gender"  value={gender} style={{borderColor:Errorgender=== "" ?"#004680":'red'}} onChange={(e) => {

setgender(e.target.value)

setErrorgender("") }}/>
        <div style={{color:"red",fontSize:"15px"}}>{Errorgender === "" ? "" : Errorgender}</div>  
          </div>
         
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="email" value={email} style={{borderColor:Erroremail=== "" ?"#004680":'red'}} onChange={(e) => {

setemail(e.target.value)

setErroremail("") }}/>
            
            <div style={{color:"red",fontSize:"15px"}}>{Erroremail === "" ? "" : Erroremail}</div>  

          </div>

          <div class="input-box">
            <span class="details">Mobile</span>
            <input type="text" placeholder="mobile"  value={mobile} style={{borderColor:Errormobile=== "" ?"#004680":'red'}} onChange={(e) => {

setmobile(e.target.value)

setErrormobile("") }}/> 
            
            <div style={{color:"red",fontSize:"15px"}}>{Errormobile === "" ? "" : Errormobile}</div>  
          </div>
         <div class="input-box">
            <span class="details">Contract Name</span>
            <input type="text" placeholder="contract name" value={Cname} style={{borderColor:ErrorCname=== "" ?"#004680":'red'}} onChange={(e) => {

setCname(e.target.value)

setErrorCname("") }}/>
<div style={{color:"red",fontSize:"15px"}}>{ErrorCname === "" ? "" : ErrorCname}</div>  
          </div>
          <div class="input-box">
            <span class="details">Contract Type</span>
            <input type="text" value={Ctype} style={{borderColor:ErrorCtype=== "" ?"#004680":'red'}} onChange={(e) => {
setCtype(e.target.value)

setErrorCtype("") }} />{/* {optionItems} */}
<div style={{color:"red",fontSize:"15px"}}>{ErrorCtype === "" ? "" : ErrorCtype}</div>  
  
 
    
                
          </div>
          <div class="input-box">
            <span class="details">Parties</span>
            <input type="text" placeholder="parties" value={parties} style={{borderColor:Errorparties=== "" ?"#004680":'red'}} onChange={(e) => {

setparties(e.target.value)

setErrorparties("") }}/>
<div style={{color:"red",fontSize:"15px"}}>{Errorparties === "" ? "" : Errorparties}</div>  
          </div>
          <div class="input-box">
            <span class="details">Amount</span>
             <input type="text" placeholder="amount" value={amount} style={{borderColor:Erroramount=== "" ?"#004680":'red'}} onChange={(e) => {

setAmount(e.target.value)

setErrorAmount("") }}/>
<div style={{color:"red",fontSize:"15px"}}>{Erroramount === "" ? "" : Erroramount}</div>  


   
          </div>
          <div class="input-box">
            <span class="details">Start Date</span>
      
            <input type="date" placeholder="date" value={sdate} style={{borderColor:Errorsdate=== "" ?"#004680":'red'}} onChange={(e) => {

setsdate(e.target.value)

setErrorsdate("") }}/> 
             {/*  <DatePicker  selected={sdate} disableClock={true} style={{borderColor:Erroredate=== "" ?"#004680":'red'}}
             onChange={(date) => {
              {setsdate(date)}
          
                setErrorsdate("")}} placeholderText="date" />   */}


<div style={{color:"red",fontSize:"15px"}}>{Errorsdate === "" ? "" : Errorsdate}</div>   
         {/*    {errors.startdate && (<p className="errorshow">{errors.startdate.message}</p>)}     */}
      {/*    <DatePicker 
     selected={edate}
    onChange={date => setedate(date)}
    minDate={new Date(sdate)} //<-- here put as minDate the startDate so user cannot select a date less than startDate
    placeholderText="Select a date"
/>    */}
          </div>

         
          <div class="input-box">
            <span class="details">End Date</span>
              <input type="date" placeholder="date" value={edate} style={{borderColor:Erroredate=== "" ?"#004680":'red'}} onChange={(e) => {

setedate(e.target.value)

setErroredate("") }}/>
<div style={{color:"red",fontSize:"15px"}}>{Erroredate === "" ? "" : Erroredate}</div>    
 {/* <DatePicker selected={edate} disableClock={true} style={{borderColor:Erroredate=== "" ?"#004680":'red'}}
    onChange={date => {setedate(date)
      setedate(date)

      setErroredate("") }} 
    minDate={new Date(sdate)} //<-- here put as minDate the startDate so user cannot select a date less than startDate
    placeholderText="Select a date"  dateFromat='YYYY-MM-dd' 
/> */}
<div style={{color:"red",fontSize:"15px"}}>{Erroredate === "" ? "" : Erroredate}</div>
            {/* { errors.ed?.type === "istartdateateInFuture" && <p>Please choose Future date!</p> } */}
          {/*   {errors.ed && (<p className="errorshow">{errors.ed.message}</p>)}   */}   
        
          </div>

         
          

          
         
          <div class="input-box">
            <span class="details">Company Name</span>
            <input type="text" placeholder="company name" value={comp} style={{borderColor:Errorcomp=== "" ?"#004680":'red'}} onChange={(e) => {

setcomp(e.target.value)

setErrorcomp("") }}/>
<div style={{color:"red",fontSize:"15px"}}>{Errorcomp === "" ? "" : Errorcomp}</div>  
          </div>

          
          <div class="input-box">
            <span class="details">Department</span>
            <input type="text" placeholder="department" value={dept} style={{borderColor:Errordept=== "" ?"#004680":'red'}} onChange={(e) => {

setdept(e.target.value)

setErrordept("") }}/>
<div style={{color:"red",fontSize:"15px"}}>{Errordept === "" ? "" : Errordept}</div>  
          </div>

          <div class="input-box">
            <span class="details">Upload File</span>
            <input type="file" placeholder="choose file" value={ufile} style={{borderColor:Errorufile=== "" ?"#004680":'red'}} onChange={(e) => {

setufile(e.target.value)

setErrorufile("") }}/>
<div style={{color:"red",fontSize:"15px"}}>{Errorufile === "" ? "" : Errorufile}</div>  
          </div>

          <div class="input-box">
            <span class="details">Address</span>
            <textarea placeholder="address" value={adrs} style={{borderColor:Erroradrs=== "" ?"#004680":'red'}} onChange={(e) => {

setadrs(e.target.value)

setErroradrs("") }}/>
<div style={{color:"red",fontSize:"15px"}}>{Erroradrs === "" ? "" : Erroradrs}</div>  
          </div>
          <div class="input-box">
            <span class="details">Description</span>
            <textarea placeholder="description"  value={desc} style={{borderColor:Errordesc=== "" ?"#004680":'red'}} onChange={(e) => {

setdesc(e.target.value)

setErrordesc("") }} />
           <div style={{color:"red",fontSize:"15px"}}>{Errordesc === "" ? "" : Errordesc}</div>  

          </div>
      
          <div class="button">
            <input type="reset" value="Reset"  onClick={()=>reset()}/>
          </div>

          <div class="button">
            <input type="button" value="Save"/>
          </div>
          <div class="button">
            <input type="submit" value="Submit"  onClick={(e) => validate(e)} />
          </div>
          </div>
        </form>
      
      </div>
    </div>
    </div>
    </div>
   
    );
}
export default Form;