import React from 'react'
import p from "../RegError/regError.module.css"
import Header from '../Header/Header';
import Button from '../Buttons/Button';
import { GrStatusGood } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import Main from '../Main/Main';



function Success({randomNum}) {
  const Navigate= useNavigate()
  const  handleClick=()=>{
    Navigate("/")
  }

  return (
    <div >           
    {/* <Header/>  */}
    <div className={p.book}>
      
     <div className={p.container}>
        {/* <h2 className=' text-[30px] text-[]'>Appointment Booking</h2> */}
<div className=' flex flex-col mb-[40px]  justify-center items-center  w-[542.72px]'>
<GrStatusGood size={50} color='#85B6FF'/>

<div className='flex flex-col items-center'>
    <h2  className='text-[24px] mt-[20px]  mb-[10px]'>Appointment Successful</h2>
    <p className='text-[18px] w-[320px]'><b>The<b></b> apt code: {randomNum}</b> has been sent to your email or phone number Successful</p>
</div>

</div>


        <Button onClick={handleClick}
        title="Back"
        color='white'
        background='#0452CE'/>
    
    </div>
</div>
 </div>
  )
}

export default Success