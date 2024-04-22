import React from 'react'
import Button from '../Buttons/Button'
import ppt from '../AptConfirmation/abt.module.css'
import { CgDanger } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

// import apt from '../AptConfirmatio/AptConfirmation.module.css'
// import prr from "./../Main/Main.module.css"


function ConfirmNotFound() {
  const navigate=useNavigate()

  const handleClick=()=>{
    navigate("/")
  }
  return (
    <div className='h-[90vh] w-full'>
      <Header/>
    <div className='h-[89vh] w-full  text-[#0452CE] flex justify-between mt-[2px]'>
       
       <div className='bg-gradient-to-t from-[#022968] to-[#0452CE] text-[#fff] w-[50%] pt-[170px] flex flex-col items-center justify-center text-center px-[100px] hidden sm:block '>

            {/* <div className='  bg-gradient-to-t from-[#022968] to-[#0452CE] text-[#fff] w-[50%] flex items-center justify-center  '>  */}
            <div className='w-[450px]  text-center'>
            <h1 className='text-[52px] flex-row '>Please comfirm your appointment here</h1>
            <p className='text-[18px]'>A healthy tomorrow starts with a healthy today.  We are here to serve  you better everyday</p>
            </div>             
             
            </div>
                <div className='bg-[#fff] w-full sm:w-[50%]  flex items-center text-left justify-center flex-col md:w-[100%]'>
                    <h1 className='text-[32px] mb-[40px] font-bold'>Appointment Details</h1>
                    <CgDanger size={58} color='#F76972' />
                    <div className='mb-[20px] w-[355px'>
                 <p className='text-[36px] font-semibold'>Not Found</p> 
                 <p className='text-[24p]'>Please book appointment</p>
                </div>
                  
                    <Button 
                    onClick={handleClick}
                title="Back"
                color='white'
                height='40px'
                background='#0452CE'
                width="80%"
                />
                </div>
        </div>
       
    </div>
  )
}

export default ConfirmNotFound