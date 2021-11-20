import logo from './logo.svg';
 import './App.css'; 
import Form from './Registration Form.js';
import UpdateForm from './Updatecontract.js';
import Nav from './Header.js';
import {  BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom'; 
import Details from './Detailsview.js';
import Home from './Home.js';
import View from './Viewdata.js'; 


function App() {
  return (
    
     
  
      
    <Router>
    <Nav/> 
    <Routes>
         <Route exact path="/" element={<Home/>}/>
       </Routes> 
          <Routes>
         <Route exact path="/form" element={<Form/>}/>
       </Routes> 
       <Routes>
         <Route exact path="/details" element={<Details/>}/>
       </Routes>
       <Routes>
         <Route exact path="/updateform" element={<UpdateForm/>}/>
       </Routes>
       {/*  <Routes>
         <Route exact path="/view" element={<View/>}/>
       </Routes>  */}
       
         </Router>

      
        
    
  );
}

export default App;
