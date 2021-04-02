import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import Login from '../Model/Model'
import Register from '../Model/Model02'
const Navbar = () => {
    return (
        <div className="NavBar02">
       <div className="Navbar">
        <div>
        <img src='binpact002.png' />
        </div>
        <div className="Text">
        <p>Profile</p>
            <p>About</p>
            <p>Plan</p>
            <p>Contact</p>
           {/* <Link to="/Register"><p className="SignUp">Sign up</p></Link>  */}
           <div className="Dadaz">
           <Register/>
           </div>

          
           {/* <Link to="/login"> <p className="Login">Login</p></Link> */}
           <Login/>
        </div>
        </div>
</div>
            
            
            
          
       
        
    )
}

export default Navbar
