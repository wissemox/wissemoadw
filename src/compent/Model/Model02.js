import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Model.css'
const Register = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const[UserNamer,setUsernamer]=useState('')
  const[Email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[Confirm,setCofirm]=useState('')

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Register</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalBody>
        <div className="Input05">
            <p>Username</p>
            {UserNamer.length===0 ? <p style={{color:"#BF0D1F"}}>Username empty</p> : null}
            <input value={UserNamer} onChange={(e)=>setUsernamer(e.target.value)}/>
            {console.log(Email)}
            <p>Email</p>
            {Email.length===0 ? <p style={{color:"#BF0D1F"}}>Email empty</p> : null}
            <input value={Email} onChange={(e)=>setEmail(e.target.value)}/>
            <p>Password</p>
            {password.length===0 ? <p style={{color:"#BF0D1F"}}>Password empty</p> : null}
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            
            <p>Confirm Password</p>
            {Confirm.length===0 ? <p style={{color:"#BF0D1F"}}>Confirm empty</p> : null}
            <input type="password" value={Confirm} onChange={(e)=>setCofirm(e.target.value)}/>
            <div className="Button05">
                <div className="Button56">
                <button color="primary" onClick={toggle}>Login</button>{' '}
          <button id="Dasw" color="secondary" onClick={toggle}>Cancel</button>
                </div>

           
            </div>
           
        </div>
        </ModalBody>
     
      </Modal>
    </div>
  );
}

export default Register;