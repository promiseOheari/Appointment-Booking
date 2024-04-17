import React, { useState } from 'react'
// import prr  from './Main.module.css'
// import rr from './confrimSuccess.module.css'
import Header from '../Header/Header'
import Shortinputs from '../Input/Shortinputs'
import Button from '../Buttons/Button'
import Success from '../SuccesMessage/Success'
import rrr from './dbSave.module.css'
import { useNavigate } from 'react-router-dom'



function DbSave() {
  const navigate= useNavigate()
  const [name, setName]= useState("")
  const [phoneEmail, setphnEmail]= useState("")
  const [host, setHost]= useState("")
  const [purpose, setPurpose]= useState("")
  const [exitTime, setExitTime]=useState('')


// const generateR = generateNumber()
// console.log(round,"clicked")

  return (
    <div className={rrr.book}>
      
            <div className={rrr.container}>
                {/* <h2 className=' text-[30px] text-[]'>Appointment Booking</h2> */}

                <div  className={rrr.foorm}>
                    <label className={rrr.labelTitle}>Name  </label>
                    <input type='text' required value={name} className={rrr.inputs} onChange={(e)=>{setName(e.target.value)
                    console.log(name)}}></input>
                    

                    <label className={rrr.labelTitle}>Email or Phone </label>
                    <input type='text' value={phoneEmail} required className={rrr.inputs} onChange={(e)=>{setphnEmail(e.target.value) 
                      console.log(phoneEmail)}}></input>

                    <Shortinputs/>

                  <label className={rrr.labelTitle}>Host </label>
                  <select className=' block mt-[10px] required' value={host} onChange={(e)=>{setHost(e.target.value)
                  console.log(host)}}>
                  <option value="" disabled selected placeholder='enter host' ></option>
                    <option value='Mary'>Mary</option>
                    <option value='Ade'>Ade</option>
                    <option value='Josh'>Josh</option>
                    <option value='Andre'>Andre</option>
                  </select>

                  <label className={rrr.labelTitle}>Purpose </label>
                  <select className=' block mt-[10px] required' value={purpose} onChange={(e)=>{setPurpose(e.target.value)
                  console.log(purpose)}}>
                  <option value="" disabled selected className=' text-red-400' ></option>
                    <option value='Complain'>Complain</option>
                    <option value='Deposit'>Deposit</option>
                    <option value='Transfer'>Transfer</option>
                    <option value='Registration'>Registration</option>
                  </select>

                  <label className={rrr.labelTitle}>Exit Time</label>
                    <input  type='time' required value={exitTime} className={rrr.inputs} onChange={(e)=>{setName(e.target.value)
                    console.log(exitTime)}}></input>
                    
                </div>
            

                <Button className={rrr.btn}
                title="Save"
                color='white'
                background='#0452CE'
                 />

{/* {randomNum && <Success/>} */}
            </div>
    </div>
  )
}

export default DbSave