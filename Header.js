import React from 'react';
import './Registration Form.css';
import './Header.css';
 import { Link } from 'react-router-dom';
function Nav() {
    return(
    <div>
      <nav>
		  
	<a class="logo" href="#">Contract</a>
	<ul class="nav-bar">
        
		<li class="nav-bar_item"><Link to="/">Home</Link></li>
		<li class="nav-bar_item"><Link to="/form">Add Contract</Link></li>
    <li class="nav-bar_item"><Link to="/details">Contract List</Link></li>
	<li class="nav-bar_item"><Link to="/conlink">Contract List</Link></li>
	{/* 	<li class="nav-bar_item dropdown">
			<a href="#">project</a>
			<ul class="project">
				<li class="drop-item"><a href="">Work 1</a></li>
				<li class="drop-item"><a href="">Work 2</a></li>
				<li class="drop-item"><a href="">Work 3</a></li>
				<li class="drop-item"><a href="">Work 4</a></li>
				<li class="drop-item"><a href="">Work 5</a></li>
				<li class="drop-item"><a href="">Work 6</a></li>
			</ul>
		</li>
		<li class="nav-bar_item"><a href="">services</a></li>
		<li class="nav-bar_item"><a href="">contact</a></li>
 */}
 	</ul> 
</nav>
        
       
    
      
     </div>
  );
}
export default Nav;