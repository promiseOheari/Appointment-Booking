import React from 'react'
import p from "../RegError/regError.module.css"
import Header from '../Header/Header';
import Button from '../Buttons/Button';
import { FaArrowRight } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { useNavigate, useLocation } from 'react-router-dom';



function Success() {
  const Navigate= useNavigate()
  const location = useLocation();
  const  handleClick=()=>{
    Navigate("/")
  }

  const handleClk=()=>{
    Navigate("/confirm")
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
    <p className='text-[18px] w-[350px]'><b>The<b></b> apt code: {location?.state?.randomNum }</b> has been sent to your email or phone number Successful</p>
</div>

</div>


        <Button onClick={handleClick}
        title="Back"
        color='white'
        background='#0452CE'/>

        <div onClick={handleClk} className='flex items-center justify-between cursor-pointer  bg-[#0452CE] mt-[250px] p-[5px] rounded-[10px] ml-[50%] text-white'><span>Continue</span><FaArrowRight /></div>
    
    </div>
    
</div>


 </div>
  )
}

export default Success