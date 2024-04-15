import React, { useState } from 'react'
import pr from "./ShortInputs.module.css"

function Shortinputs() {
  const [time, setTime]= useState('')
  const [date, setDate]= useState('')
  return (
    // <div className=' w-[100%] h-40 bg-slate-500 flex flex-col justify-between'>
   
    <div className={pr.box}>
<div>
    <label className={pr.labelTitle}>Date  </label>
         <input type='date' required className={pr.half}></input>
   
</div>


<div>
    <label className={pr.labelTitle}>Time  </label>
         <input type='time' required className={pr.half}></input>
  
</div>


    {/* <label className={pr.labelTitle}>Time
    <input type='time' required className={pr.half}></input>
    </label> */}
  {/* </div> */}




  {/* <div>
  <label className={pr.labelTitle}>Date</label>
  <input type='date' required className={pr.inputsHalf} ></input> 
  </div> */}



  </div>
  )
}

export default Shortinputs