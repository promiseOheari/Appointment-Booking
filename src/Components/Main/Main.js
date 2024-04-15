import React, { useState } from 'react'
import prr  from './Main.module.css'
import Header from '../Header/Header'
import Shortinputs from '../Input/Shortinputs'
import Button from '../Buttons/Button'
import Success from '../SuccesMessage/Success'
import { useNavigate } from 'react-router-dom'


function Main() {
  const navigate= useNavigate()
  const [name, setName]= useState("")
  const [phoneEmail, setphnEmail]= useState("")
  const [host, setHost]= useState("")
  const [purpose, setPurpose]= useState("")

  const [randomNum, setRandomNum]=useState(0)

 const AptCode=()=>{
  const displayNumber = Math.floor(Math.random() * 900)+100
  setRandomNum(displayNumber )
  console.log(displayNumber, "hello")

  if(displayNumber>200){
return navigate("/success")
}
else{
  navigate("/error")
}

      }

// const generateR = generateNumber()
// console.log(round,"clicked")

  return (
    <div className={prr.book}>
      
            <div className={prr.container}>
                {/* <h2 className=' text-[30px] text-[]'>Appointment Booking</h2> */}

                <div  className={prr.foorm}>
                    <label className={prr.labelTitle}>Name  </label>
                    <input type='text' required value={name} className={prr.inputs} onChange={(e)=>{setName(e.target.value)
                    console.log(name)}}></input>
                    

                    <label className={prr.labelTitle}>Email or Phone </label>
                    <input type='text' value={phoneEmail} required className={prr.inputs} onChange={(e)=>{setphnEmail(e.target.value) 
                      console.log(phoneEmail)}}></input>

                    <Shortinputs/>

                  <label className={prr.labelTitle}>Host </label>
                  <select className=' block mt-[10px] required' value={host} onChange={(e)=>{setHost(e.target.value)
                  console.log(host)}}>
                  <option value="" disabled selected placeholder='enter host' ></option>
                    <option value='Mary'>Mary</option>
                    <option value='Ade'>Ade</option>
                    <option value='Josh'>Josh</option>
                    <option value='Andre'>Andre</option>
                  </select>

                  <label className={prr.labelTitle}>Purpose </label>
                  <select className=' block mt-[10px] required' value={purpose} onChange={(e)=>{setPurpose(e.target.value)
                  console.log(purpose)}}>
                  <option value="" disabled selected className=' text-red-400' ></option>
                    <option value='Complain'>Complain</option>
                    <option value='Deposit'>Deposit</option>
                    <option value='Transfer'>Transfer</option>
                    <option value='Registration'>Registration</option>
                  </select>
                </div>
                {randomNum}

                <Button onClick={AptCode}
                title="Book"
                color='white'
                background='#0452CE'/>

{/* {randomNum && <Success/>} */}
            </div>
    </div>
  )
}

export default Main