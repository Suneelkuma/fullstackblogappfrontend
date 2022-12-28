import React, { useState } from 'react'

import "./register.css"
const signUpInitialvalues={
    email:'',
    password:'',
    confirmpassword:''
}
export default function Register() {
    const [signUp,setSignUp]=useState(signUpInitialvalues)
    const onInputChange=(e)=>{
console.log(e.target.value,e.target.name);
setSignUp({...signUp,[e.target.name]:e.target.value})
    }
  return (
    <div className="container">
  <h1>SignUP</h1>
 
   <div className='input-email margin'>
   <label htmlFor="input" className='label'>Email</label>
    <input type="text" required={true} onChange={(e)=>onInputChange(e)} name="email" className='input fill'/>
   </div>
       <div className='input-password margin'>
   <label htmlFor="input" className='label'>Password
   </label>
   <input type="text" required={true} onChange={(e)=>onInputChange(e)} name="password"  className='input fill'/>
   </div> 
   <div className='input-password margin'>
   <label htmlFor="input" className='label '>Confirm Password
   </label>
   <input type="text" required={true} onChange={(e)=>onInputChange(e)} name="confirmpassword" className='input fill'/>
   </div> 
     
    
   
    <div className='input-button margin'>
    <button className='btn'>SIGNUP</button>
    </div>
    
  

  </div>
  )
}
