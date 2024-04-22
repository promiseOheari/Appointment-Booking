import React, { useState } from 'react'
// import prr  from './Main.module.css'
// import rr from './confrimSuccess.module.css'
import Header from '../Header/Header'
import Shortinputs from '../Input/Shortinputs'
import Button from '../Buttons/Button'
import Success from '../SuccesMessage/Success'
import rrr from './dbSave.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function DbSave() {
  const navigate= useNavigate()
  const [name, setName]= useState("")
  const [phoneEmail, setphnEmail]= useState("")
  const [host, setHost]= useState("")
  const [purpose, setPurpose]= useState("")
  const [exitTime, setExitTime]=useState('')
  const [loading, setLoading]= useState(false)


// const generateR = generateNumber()
// console.log(round,"clicked")

const sendData = async ()=>{
  setLoading(true);

  try {
    const response =  await axios.post("http://localhost:8000/visitors", exitTime)
    setLoading(false)
  } catch (error) {
    setLoading(false)
  } 
 }


const database = ()=>{
  navigate('/databse')
}

  return (
       
    <div className=" bg-[#f5f5f5] h-[100vh] w-full sm:w-2/4 mx-auto p-10 flex flex-col items-center">
      {loading? (<p>loading...</p>):(
      
       <>
                    {/* <label className={rrr.labelTitle}>Name  </label>
                    <input type='text' required value={name} className={rrr.inputs} onChange={(e)=>{setName(e.target.value)
                    console.log(name)}}></input>
                    

                    <label className={rrr.labelTitle}>Email </label>
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
                  </select> */}
                    <div className='flex items-left flex-col w-[100%] mt-[30%]'>
                  <label className={rrr.labelTitle}>Exit Time</label>
                    <input  type='time' required value={exitTime} className={rrr.inputs} onChange={(e)=>{setExitTime(e.target.value)
                    console.log(exitTime,'time')}}></input></div>
                    
                
            

                <Button className={rrr.btn}
                onClick={database}
                title="Save"
                color='white'
                background='#0452CE'
                width='100%'
                 />

{/* {randomNum && <Success/>} */}
      </>     
    ) }
    </div>
  )
}

export default DbSave