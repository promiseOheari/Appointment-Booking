import React, { useState } from 'react'
// import prr  from './Main.module.css'
import rr from './confrimSuccess.module.css'
import Header from '../Header/Header'
import Shortinputs from '../Input/Shortinputs'
import Button from '../Buttons/Button'
import Success from '../SuccesMessage/Success'
import { useNavigate } from 'react-router-dom'



function ConfirmSuccess() {

  const navigate= useNavigate()
  const [name, setName]= useState("")
  const [phoneEmail, setphnEmail]= useState("")
  const [host, setHost]= useState("")
  const [purpose, setPurpose]= useState("")
  const [exitTime, setExitTime]=useState('')

const handleClick=()=>{
    navigate("/DbSave")
};

const handleClk=()=>{
  navigate("/notConfirmed")
}
// const generateR = generateNumber()
// console.log(round,"clicked")

  return (
    <div className={rr.book}>
      
            <div className={rr.container}>
                {/* <h2 className=' text-[30px] text-[]'>Appointment Booking</h2> */}

                <div  className={rr.foorm}>
                    <label className={rr.labelTitle}>Name  </label>
                    <input type='text' required value={name} className={rr.inputs} onChange={(e)=>{setName(e.target.value)
                    console.log(name)}}></input>
                    

                    <label className={rr.labelTitle}>Email or Phone </label>
                    <input type='text' value={phoneEmail} required className={rr.inputs} onChange={(e)=>{setphnEmail(e.target.value) 
                      console.log(phoneEmail)}}></input>

                    <Shortinputs/>

                  <label className={rr.labelTitle}>Host </label>
                  <select className=' block mt-[10px] required' value={host} onChange={(e)=>{setHost(e.target.value)
                  console.log(host)}}>
                  <option value="" disabled selected placeholder='enter host' ></option>
                    <option value='Mary'>Mary</option>
                    <option value='Ade'>Ade</option>
                    <option value='Josh'>Josh</option>
                    <option value='Andre'>Andre</option>
                  </select>

                  <label className={rr.labelTitle}>Purpose </label>
                  <select className=' block mt-[10px] required' value={purpose} onChange={(e)=>{setPurpose(e.target.value)
                  console.log(purpose)}}>
                  <option value="" disabled selected className=' text-red-400' ></option>
                    <option value='Complain'>Complain</option>
                    <option value='Deposit'>Deposit</option>
                    <option value='Transfer'>Transfer</option>
                    <option value='Registration'>Registration</option>
                  </select>
                    
                </div>
            

                <Button className={rr.btn}
                onClick={handleClick}
                title="Next"
                color='white'
                background='#0452CE'
                 />

<div onClick={handleClk} className='flex items-center justify-between cursor-pointer  bg-[#0452CE] mt-[100px] p-[5px] rounded-[10px] ml-[50%] text-white'><span>no appointment</span></div>


{/* {randomNum && <Success/>} */}
            </div>
    </div>
  )
}

export default ConfirmSuccess