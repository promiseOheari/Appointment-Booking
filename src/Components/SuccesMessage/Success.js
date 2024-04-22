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
    <div className="bg-[#f5f5f5] flex flex-col items-center justify-center h-[100vh] w-full sm:w-2/4 mx-auto p-10">
         
<GrStatusGood size={50} color='#85B6FF'/>

<div className='flex flex-col items-center mb-[20px] text-[#0452CE]'>
    <h2  className='text-[24px] mt-[20px]  mb-[10px]'>Appointment Successful</h2>
    <p className='text-[18px] w-[350px]'><b>The<b></b> apt code: {location?.state?.randomNum }</b> has been sent to your email or phone number Successful</p>
</div>

        <Button  onClick={handleClick}
        title="Back"
        color='white'
         width="80%"
        background='#0452CE'
        
        />
        
       

        <div onClick={handleClk} className='flex items-center justify-between cursor-pointer  bg-[#0452CE] mt-[170px] hover:bg-[#7abeec] transition-all ease-in-out duration-150s p-[7px] rounded-[10px] ml-[50%] text-white'><span>Continue</span><FaArrowRight /></div>
    
    </div>
    
  )
}

export default Success