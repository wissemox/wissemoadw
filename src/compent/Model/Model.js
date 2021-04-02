import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Model.css'
const Login = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const[Email , setEmail]=useState('')
  const[Password , setPassword]=useState('')
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Login</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
      
        <ModalBody style={{borderRadius:"30px" }}>
        <div className="lOGIN">
    
            <p>Email</p>
            {Email.length===0 ? <p>your Email you empty</p>: null}
            <input value={Email} onChange={(e)=>setEmail(e.target.value)}/>
            <p>Password</p>
            {Password.length===0 ? <p>your Email you empty</p>: null}
            <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            <div className="Button56">
                <button color="primary" onClick={toggle}><p>Login</p></button>{' '}
          <button id="Dasw" color="secondary" onClick={toggle}>Cancel</button>
                </div>
           
         
        </div>
        </ModalBody>
       
      </Modal>
    </div>
  );
}

export default Login;