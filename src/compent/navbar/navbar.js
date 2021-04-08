import React,{useState} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import Login from '../Model/Model'
import Register from '../Model/Model02'
const Navbar = () => {
    const [Bloen , setBloen]=useState(false)
    return (
        <div className="NavBar02">
       <div className="Navbar">
        <div>
            <div className="ImageFlexa">
                <div className="ImageFlex02">
                <img src='binpact002.png' />
                </div>
            <div className="Image5">
        <img onClick={()=>setBloen(!Bloen)} src="Menud.png"/>
        </div>
        {/*  */}
        
        {Bloen&& <div className="Text60" > 
        <div className="Text55">
            <div className="Background5"> 
            <p>Profile</p>
            <p>About</p>
            <p>Plan</p>
            <p>Contact</p>
            <Register/>
            <Login/>
            </div>
            </div>
            </div>}
       
        </div>
        </div>
        <div className="Text">
        <div>
            <div className="Test06">
               
            <p>Profile</p>
            <p>About</p>
            <p>Plan</p>
            <p>Contact</p>
           {/* <Link to="/Register"><p className="SignUp">Sign up</p></Link>  */}
           <div className="Dadaz">
           <Register/>
           </div>

            <Login/>
            </div>
           
            </div>
        </div>
    
        </div>
</div>
            
            
            
          
       
        
    )
}

export default Navbar
