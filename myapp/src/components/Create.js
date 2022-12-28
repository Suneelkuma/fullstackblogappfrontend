import React from 'react'

import "./Create.css"
export default function Create() {
    
  return (<>
  <div className="createcontainer">
  <div className='field'>
  <input type="text" className='text' />
  </div>
  <div className='field'>
  <input type="file" className='file'  />
  </div>
  <div className='field'>
  <textarea name="text" id="text" cols="60" rows="10"></textarea>
  </div>
   

 
  <button className='btn1'>SavePost</button>

  </div>
  



  </>
    
  )
}
