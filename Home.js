import React from 'react';
import './Registration Form.css';
import './Header.css';
import con from '../src/Assets/contract.jpg';
 import { Link } from 'react-router-dom';
 import Image from './Assets/home.jpg';
function Home() {
    return(
        <div class="homebdy">
        <div class="homecontainer">
	<div class="titular">	
		
		<img src={Image} className="bg" height="620px"width="100%"/>
		<div class="centered" style={{position: "absolute",top: "50%",left: "30%",color:'#FFFFF7',fontSize:"50px",fontWeight:"bold"}}>CONTRACT MANAGEMENT</div>
	</div>
	<div class="context">
		<br/><br/>
       	</div>
	
        
	
</div>
</div>
);
}
export default Home;