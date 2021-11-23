import React ,{ useState ,useEffect} from 'react';
import './Detailsview.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Contractlink() {
  let history = useNavigate();

 /*  const [status, setStatus] = useState("")
  const [daysleft, setdaysleft] = useState("")
  const [startdate, setStartdate] = useState("")
  const [enddate, setEnddate] = useState("")
 
  const [errordaysleft, setErrordaysleft] = useState("")
  const [errorStatus, setErrorStatus] = useState("")
  const [errorSdate, setErrorSdt] = useState("");
  const [errorEdate, setErrorEdt] = useState("");

  const diffDays = date => {
    let today = new Date(Date.now()).toLocaleDateString();
    let expire = new Date(date.enddate());
    let difference = new Date(expire).getTime() - new Date(today).getTime();
    let daysleft= difference / (1000 * 3600 * 24);
    console.log(daysleft);
  }; */
  
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  console.log(date);
 

   
  /* const expiry = (e) => {
  
    e.preventDefault()
  
    if( ){
      setErrorStatus("Expiring soon");
      }
      else if(daysleft<0){
         setErrorStatus("Expired");
      }
      else{
        setErrorStatus("Running");
      }
    }
   
   */
  
  

  const [form,setForm]= useState([])
  useEffect( ()=>{
    display()
    /* deleteBudget() */
  },[])
  
  const display =() =>{
    return axios.get("http://localhost:9090/getform").then((res)=>{
      console.log(res.data)
      setForm(res.data)
    })
}
console.log("formdata",form);

/* 
for(var i in form){
   
  console.log("enddate",[i.firstname])
}  */











const [diff,setDiff]=useState("");
    return(

      <div class="dbg">
       <div class="detailscontainer">
       <ul class="responsive-table">
         <li class="table-header">
           <div class="col col-1">First Name</div>
           <div class="col col-2">Contract Name</div>
           <div class="col col-3">Contract Type</div>
           <div class="col col-5">Parties</div>
           <div class="col col-4">Amount</div>
           <div class="col col-6">Start Date</div>
           <div class="col col-7">Due Date</div>
           <div class="col col-7">Status</div>
           <div class="col col-8">Action</div>
           
         </li>
      
        {form.map((e=>{
         /*  console.log(e); */
    
            
         
            let today = new Date(Date.now()).toLocaleDateString();
            let expire = new Date(e.enddate);
            let difference = new Date(expire).getTime() - new Date(today).getTime();
            let daysleft= difference / (1000 * 3600 * 24);
            console.log(daysleft);
            
          if(daysleft<0){

         
            return(

       
           
                   
         <li class="table-row">
           <div class="col col-1" data-label="First Name">{e.firstname}</div>
           <div class="col col-2" data-label="Contract Name">{e.contractname}</div>
           <div class="col col-3" data-label="ContractType">{e.contracttype}</div>
           <div class="col col-5" data-label="Parties">{e.parties}</div>
           <div class="col col-4" data-label="Amount">{e.amount}</div>
           <div class="col col-6" data-label="Start Date">{e.startdate}</div>
           <div class="col col-7" data-label="Due Date">{e.enddate}</div>
           <div class="col col-8" style={{fontWeight:"bold", color: daysleft<=0?"red":daysleft<30?"#FFC300":"green"}} data-label="Status">{daysleft<=0?"EXPIRED":daysleft<30?"EXPIRING SOON":"RUNNING"}</div> 
           <div class="col col-8" data-label="Action" > 

           <button type="button" class="budgetbutton2" >
             <a class="button__text2"onClick={() => {
                         /* navigate({ pathname: '/updateform', state: e })  */
                       history('/form', { state: e, replace:true }) 
                     }}>RENEW</a>
                     </button>
<br/><br/>
                     <button type="button" class="budgetbutton2" >
             <a class="button__text2"onClick={() => {
                         /* navigate({ pathname: '/updateform', state: e })  */
                       history('/view', { state: e, replace:true }) 
                     }}>VIEW</a>
                     </button>
              </div>      
         </li>
           ) }
        }))}  
     
           
       </ul>
       
     </div>
     
     </div>

    
    );
}
export default Contractlink;