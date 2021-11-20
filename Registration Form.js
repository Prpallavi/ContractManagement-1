import React,{ useState } from 'react';
import './Registration Form.css';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

/* import { Link } from 'react-router-dom'; */
function Form() {
  let history = useNavigate();

  const {register, handleSubmit,handleChange,formState:{errors,reset},setValue} = useForm();
const onSubmit=(data)=>{axios.post("http://localhost:9090/add",
{data} 
).then((res)=>{console.log(res.data)
 })}
/*   console.log(data) */


    return(
      <div>
      <div className="formbdy">
<div class="container">    
    <div class="title">Registration</div>
    <div class="content">
      <form onSubmit={handleSubmit(onSubmit)}  method="post">
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" placeholder="first name"   {...register("firstname", { required: "First Name is Required" })}/>
            {errors.firstname && (<p className="errorshow">{errors.firstname.message}</p>)}
         </div>
         <div class="input-box">
            <span class="details">Contract Name</span>
            <input type="text" placeholder="contract name"  {...register("contractname", { required: "Contract Name is Required" })}/>
            {errors.contractname && (<p className="errorshow">{errors.contractname.message}</p>)}
          </div>
          <div class="input-box">
            <span class="details">Contract Type</span>
            <select {...register("contracttype", { required: "Contract Type is Required" })} >{errors.contracttype && (<p className="errorshow">{errors.contracttype.message}</p>)}

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
            <input type="text" placeholder="parties"  {...register("parties", { required: "Parties is Required" })}/>
            {errors.parties && (<p className="errorshow">{errors.parties.message}</p>)}
          </div>
          <div class="input-box">
            <span class="details">Amount</span>
            <input type="text" placeholder="amount" {...register("amount", { required: "Amount is Required" })} />
            {errors.amount && (<p className="errorshow">{errors.amount.message}</p>)}

   
          </div>
          <div class="input-box">
            <span class="details">Start Date</span>
            <input type="date" placeholder="date"  {...register("startdate", { required: "Start Date is required" })}/>
            { errors.startdate && (<p className="errorshow">{errors.startdate.message}</p>) }
         {/*    {errors.startdate && (<p className="errorshow">{errors.startdate.message}</p>)}     */}
          </div>

         
          <div class="input-box">
            <span class="details">End Date</span>
            <input type="date" placeholder="date"  {...register("enddate", { required: "End Date is Required" })} />
            { errors.enddate  && (<p className="errorshow">{errors.enddate.message}</p>) }
            {/* { errors.ed?.type === "istartdateateInFuture" && <p>Please choose Future date!</p> } */}
          {/*   {errors.ed && (<p className="errorshow">{errors.ed.message}</p>)}   */}   
          </div>

          <div class="input-box">
            <span class="details">Last Name</span>
            <input type="text" placeholder="last name" {...register("lastname", { required: "Last Name is Required" })} />
            {errors.lastname && (<p className="errorshow">{errors.lastname.message}</p>)}

   
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <input type="text" placeholder="gender"  {...register("gender", { required: "Gender is Required" })} 
            />{errors.gender && (<p className="errorshow">{errors.gender.message}</p>)}
        
          </div>
         
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="email"  {...register("email", { required:'' ,
           pattern:  { value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,message:"Invalid Email Address"}})} />
           {errors.email && (<p className="errorshow">{errors.email.message}</p>)} 
            
          

          </div>

          <div class="input-box">
            <span class="details">Mobile</span>
            <input type="text" placeholder="mobile"    {...register("mobile", { required:'' ,
           pattern:  { value:/^[6-9]\d{9}$/,message:"Invalid Mobile No."}})} />
           {errors.mobile && (<p className="errorshow">{errors.mobile.message}</p>)} 
            
         
          </div>

          
         
          <div class="input-box">
            <span class="details">Company Name</span>
            <input type="text" placeholder="company name"  {...register("companyname", { required: "Company Name is Required" })}/>
            {errors.companyname && (<p className="errorshow">{errors.companyname.message}</p>)}
          </div>

          
          <div class="input-box">
            <span class="details">Department</span>
            <input type="text" placeholder="department"  {...register("department", { required: "Department is Required" })}/>
            {errors.department && (<p className="errorshow">{errors.department.message}</p>)}
          </div>

         
         
         

          <div class="input-box">
            <span class="details">File Upload</span>
            <input type="file" placeholder="Choose File"   {...register("file", { required: "File is Required" })} />
            {errors.file && (<p className="errorshow">{errors.file.message}</p>)}
          </div>

          <div class="input-box">
            <span class="details">Address</span>
            <textarea placeholder="address"  {...register("addrerss", { required: "Address is Required" })} />    
             {errors.address && (<p className="errorshow">{errors.address.message}</p>)}

          </div>
          <div class="input-box">
            <span class="details">Description</span>
            <textarea placeholder="description"   {...register("description", { required: "Description is Required"})} />
             {errors.description && (<p className="errorshow">{errors.description.message}</p>)}
           

          </div>
      
       

          <div class="button">
            <input type="submit" value="Save"/>
          </div>
          <div class="button">
            <input type="submit" value="Submit" onClick={() => {
                         
                       history('/details') 
                     }}/>
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