import React, { useState } from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom'
import "./login.css"
import Register from './Register'
import Home from './Home'
export default function Login() {
    const [account,setAccount]=useState(true)
    // const navigate=useNavigate()
    
    // const navigateToHome=()=>{
    //   navigate('/Home')
    // }
    function toggleSignup(){
        setAccount(false)
    }
  return (<div>
  
  {
    account===true ?
    <div className="container">
    <h1>Login</h1>
   
     <div className='input-email margin'>
     <label htmlFor="input" className='label'>Email</label>
      <input type="text" required={true}  className='input fill'/>
     </div>
         <div className='input-password margin'>
     <label htmlFor="input" className='label'>Password
     </label>
     <input type="text" required={true} className='input fill'/>
     </div> 
       
      
      <input type="checkbox" required={true} name="" id="" className='margin'/><span>Remember me?</span>
      <div className='input-button margin'>
      <button className='btn' >LOGIN</button>
      {/* <Routes>
        <Route path='/home' element={<Home/>} />
      </Routes> */}
      </div>
      <div className='forgot'>Forgot password ?</div>
      <div  className="sign margin">
          Need an account: <button onClick={toggleSignup}>SIGNUP</button>
      </div>
  
    </div>:<Register/>
  }
 
  
    
  
  </div>
  )
}
