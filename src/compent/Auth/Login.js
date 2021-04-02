import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
    const[Email , setEmail]=useState('')
    const[Password , setPasword]=useState('')
    return (
        <div>

        
        <div className="BackGround05">
            <div className="DisplayFlex">

           
            <div>
            <Link to="/Register"><p id="Register">Register</p></Link>

            <img src="LoginImageTest.png"/>
            </div>
            <div className="InputLogin">
                <p>Email</p>
                {Email.length===0  ? <p id="Email">Email is empty</p>:null}
                <input value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                <p>Password</p>
                {Password.length===0  ? <p id="Email">Password is empty</p>:null}
                <input value={Password} onChange={(e)=>setPasword(e.target.value)}/>
                <div>
                <button>Sgin up</button>
                <h6>Connect with Social media</h6>
                <div className="ImageFlex">
                <img src="Gmail.png"/>
            <img src="Linkdin.png"/>
                </div>
          
               
                
                
                </div>
              
            </div>

        </div>
        </div>
        <div>

        </div>
        </div>
    )
}

export default Login
