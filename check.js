<div className="wrapper">
        <form name="myForm" action="#" onsubmit="return validateForm()" method="post" required>
        <div className="title1">
        REGISTRATION FORM
        </div>
        
        <div className="form">
           <div className="inputfield">
              <label>First Name</label>
              <input type="text" className="input" name="fill" value={budgetname} style={{borderColor:errorNm=== "" ?"#004680":'red'}} onChange={(e) => {

setName(e.target.value)

setErrorNm("") }}/>

</div>
           </div>     
           <div className="form">
           <div className="inputfield">
              <label>Last Name</label>
              <input type="text" className="input" name="fill" value={budgetname} style={{borderColor:errorNm=== "" ?"#004680":'red'}} onChange={(e) => {

setName(e.target.value)

setErrorNm("") }}/>


           </div>  
           </div>     
           <div className="form">
           <div className="inputfield">
              <label>Gender</label>
              <input type="text" className="input" name="fill" value={budgetname} style={{borderColor:errorNm=== "" ?"#004680":'red'}} onChange={(e) => {

setName(e.target.value)

setErrorNm("") }}/>


           </div> 
           </div>     
           <div className="form">
           <div className="inputfield">
              <label>Contract Name</label>
              <input type="text" className="input" name="fill" value={budgetname} style={{borderColor:errorNm=== "" ?"#004680":'red'}} onChange={(e) => {

setName(e.target.value)

setErrorNm("") }}/>


           </div>   
           
         {/*   <div className='budget_error'>{errorNm === "" ? "" : errorNm}</div>     */}
    <br/>
    </div>
    <div className="form">
           <div className="inputfield">
            <label>Category</label>
            <div className="custom_select">
              <select value={category}  style={{borderColor:errorCt=== "" ?"#004680":'red'}} onChange={(e) => {

setCategory(e.target.value)

setErrorCt("") }}>

                <option value="select">Select Category</option>
                <option value="Insurance">Insurance</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Grooming">Grooming</option>
                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="HealthCare">HealthCare</option>
    
              </select>
             
            </div>
          
         </div> 

      </div>
         
        <br/>
      {/*   <div className='budget_error'>{errorCt === "" ? "" : errorCt}</div>  */}
      
           <div className="form">
            <div className="inputfield">
               <label>Amount</label>
               <input type="text" className="input" name="fill2" value={amount} style={{borderColor:errorAmt=== "" ?"#004680":'red'}} onChange={(e) => {

setAmount(e.target.value)

setErrorAmt("") }}/>

            </div>  
           {/*  <div className='budget_error'>{errorAmt === "" ? "" : errorAmt}</div> */}
            <br/>
            <div className="inputfield">
              <label>BudgetPlan</label>
              <div className="custom_select">
                <select value={budgetplan} style={{borderColor:errorBpln=== "" ?"#004680":'red'}} onChange={(e) => {

setBudgetplan(e.target.value)

setErrorBpln("") }}>

                  <option value="select">Select Budget Plan</option>
                  <option value="Monthly">Monthly Budget</option>
                  <option value="Weekly">Weekly Budget</option>
                  <option value="Yearly">Yearly Budget</option>
                  
                </select>
                  </div>
             
           </div> 
         {/*   <div className='budget_error'>{errorBpln === "" ? "" : errorBpln}</div>
            */}
           <br/>
           <div className="inputfield">
            <label for="birthday">StartDate</label>
            <input type="date" id="birthday" name="birthday"style={{border: "1px solid",  width: "100%",
             height: "100%",borderRadius:"6px",padding: "4px 10px",borderColor:errorSdate=== "" ?"#004680":'red'}} value={startdate}  onChange={(e) => {

              setStartdate(e.target.value)

              setErrorSdt("") }}/><br/>
              
           </div>
          {/*  <div className='budget_error'>{errorSdate === "" ? "" : errorSdate}</div> */}
           <br/>
           <div className="inputfield">
             <label for="birthday">EndDate</label>
             <input type="date" id="birthday" name="birthday"style={{border: "1px solid",   width: "100%",
             height: "100%",borderRadius:"6px",padding: "4px 10px",borderColor:errorEdate=== "" ?"#004680":'red'}} value={enddate}  onChange={(e) => {

              setEnddate(e.target.value)

              setErrorEdt("") }}/>
              
            </div>
          {/*   <div className='budget_error'>{errorEdate === "" ? "" : errorEdate}</div> */}
              <div className="inputfield"> 
          
           <input type="reset"value="Reset" onClick={()=>reload()} className="btn"/>
          
            <input type="submit" value="Add" className="btn" onClick={(e) => validate(e)}/>
          
         </div>
         
        
          
        </div>
      </form>
    </div>
  
     
