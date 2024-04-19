import React from 'react'
import Button from '../Buttons/Button'
import ppt from '../AptConfirmation/abt.module.css'
import { Navigate, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'

// import apt from '../AptConfirmatio/AptConfirmation.module.css'
// import prr from "./../Main/Main.module.css"


function AptConfirmation() {
  const Navigate= useNavigate()

  const  handleClk=()=>{
    Navigate("/confirmed")
  }

  return (
    <div className=' h-[100vh] w-full text-[#0452CE] flex justify-between'>
       
        <div className='bg-gradient-to-t from-[#022968] to-[#0452CE] text-[#fff] w-[50%] flex flex-col items-center justify-center text-center px-[100px] hidden sm:block '>
 
            <h1 className='text-[52px] flex-row '>Please comfirm your appointment here</h1>
            <p className='text-[18px] mt-[10px]'>A healthy tomorrow starts with a healthy today.  We are here to serve  you better everyday</p>
            </div>   
                     
                <div className=' bg-[#fff] w-full sm:w-[50%]  flex items-center justify-center flex-col'>
                    <h1 className='text-[32px] mb-[40px] font-bold'>Appointment Details</h1>
                    <div className='mb-[20px] w-full  flex flex-col justify-center items-center'>
                    <div className=' w-[80%]'>
                      <label>Name</label>
                    <input  require className='mb-[30px] w-[100%]'></input>
                      </div>
                    
                <div className=' w-[80%]'>
                    <label>Apt Code </label>
                    <input type='text' required className='mb-[30px] w-[100%]'></input> 
                </div>
          </div>
                
                  
                    <Button 
                    onClick={handleClk}
                title="Confirm"
                color='white'
                height='40px'
                background='#0452CE'
                width='80%'
                />

{/* <div onClick={handleClk} className='flex items-center justify-between cursor-pointer  bg-[#0452CE] mt-[250px] p-[5px] rounded-[10px] ml-[50%] text-white'><span>appointment</span></div> */}

                </div>
        </div>
       
    // </div>
  )
}

export default AptConfirmation

