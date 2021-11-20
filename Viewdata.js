import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const View = () => {

  let history = useNavigate();

 
 
/*    const[viewFname,setFname]=useState(location.state.firstname)
  const[viewCname,setCname]=useState(location.state.contractname)
  const[viewCtype,setCtype]=useState(location.state.contractype)
  const[viewamount,setAmount]=useState(location.state.amount)
  const[viewparties,setparties]=useState(location.state.parties)
  const[viewsdate,setsdate]=useState(location.state.startdate)
  const[viewedate,setedate]=useState(location.state.enddate)  */
  
 /*  const [e, setView] = useState({
    firstname: "",
    contractname: "",
    contracttype: "",
    parties: "",
    amount: "",
    startdate:"",
    enddate:""
  });
  const {id } = useParams();
  useEffect(() => {
    loadView();
  }, []); */
  const [view,setView]= useState([])
  useEffect( ()=>{
    loadView()
    /* deleteBudget() */
  },[])
  const loadView = (id) => {
    const res = axios.get(`http://localhost:9090/par_view/${id}`);
    setView(res.data);
  };
  return (
      <div>
    <section class="container">
    <h1></h1>
      <div class="row">
        <article class="card fl-left">
        {view.map((e=>{
            return(
          <section class="card-cont">
         
              <div>
            <h2>FIRST NAME : {e.firstname}</h2>
            <h2>CONTRACT NAME : {e.contractname}</h2>
            <h2>CONTRACT TYPE : {e.contracttype}</h2>
            <h2>PARTIES: {e.parties}</h2>
            <h2>AMOUNT: {e.amount}</h2>
            <h2>START DATE: {e.startdate}</h2>
            <h2>END DATE: {e.enddate}</h2>
          </div>
           
          </section>
          )
        }))} 
        </article>
    </div>
</section>
</div>    
);
}

export default View;

 