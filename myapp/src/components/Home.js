import React, { useState } from 'react'

import Login from './Login'
import "./home.css"
import Create from './Create'
export default function Home() {
    const [data,setData]=useState(0)
    function handleclick(){
setData(!data)
console.log("you clicked me");

    }
  return (<>
  <div className="main">
    <div className="header">
        <h1 className='heading' >BlogsApp</h1>
        <div id="head">
        <ul className='list' >
            <li  style={{listStyleType: "none" ,display:"inline"}}>Home</li>
            <li onClick={handleclick} style={{listStyleType: "none",display:"inline"}}>Create</li>
            <li style={{listStyleType: "none" ,display:"inline"}}>LogOut</li>
        </ul>
        </div>
       
    </div>
    {
        data?<Create />:null
    }
  </div>



  </>
 
  )
}
