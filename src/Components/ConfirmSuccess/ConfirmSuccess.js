import React, { useState } from 'react'
// import prr  from './Main.module.css'
import rr from './confrimSuccess.module.css'
import prr from '../Main/Main.module.css'
import Header from '../Header/Header'
import Shortinputs from '../Input/Shortinputs'
import Button from '../Buttons/Button'
import Success from '../SuccesMessage/Success'
import { useNavigate } from 'react-router-dom'



function ConfirmSuccess() {

  const navigate= useNavigate()
  const [name, setName]= useState("")
  const [phoneEmail, setphnEmail]= useState("")
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
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
   
      
    <div className=" bg-[#fff] h-[100%] w-full">
      <Header/>
               <div className=" bg-[#f5f5f5] h-[89vh] w-full sm:w-2/4 mx-auto p-10 mt-[2px]">
                    <label className={rr.labelTitle}>Name  </label>
                    <input type='text' required value={name} className={rr.inputs} onChange={(e)=>{setName(e.target.value)
                    console.log(name)}}></input>
                    

                    <label className={rr.labelTitle}>Email</label>
                    <input type='text' value={phoneEmail} required className={rr.inputs} onChange={(e)=>{setphnEmail(e.target.value) 
                      console.log(phoneEmail)}}></input>

            <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-2 md:mb-0">
                    <label className="block mb-1">Date</label>
                    <input
                    type="date"
                     value={date}
                     required
                    onChange={(e) => {
                  setDate(e.target.value);
                  console.log(date);
                }}
               className="w-full"
                />
          </div>

        <div className="w-full md:w-1/2 pl-0 md:pl-2">
          <label className="block mb-1">Time</label>
          <input
            type="time"
            value={arrival}
            required
            onChange={(e) => {
              setArrival(e.target.value);
              console.log(arrival);
            }}
            className="w-full"
          />
        </div>
      </div>

                    {/* <Shortinputs/> */}

                    <label className={prr.labelTitle}>Host </label>
      <select
        className=" block mt-[10px] w-full required"
        value={host}
        onChange={(e) => {
          setHost(e.target.value);
          console.log(host);
        }}
      >
        <option value="" disabled selected placeholder="enter host"></option>
        <option value="Mary">Mary</option>
        <option value="Ade">Ade</option>
        <option value="Josh">Josh</option>
        <option value="Andre">Andre</option>
      </select>
      <label className={prr.labelTitle}>Purpose </label>
      <select
        className=" block mt-[10px] w-full required"
        value={purpose}
        onChange={(e) => {
          setPurpose(e.target.value);
          console.log(purpose);
        }}
      >
        <option value="" disabled selected className=" text-red-400 "></option>
        <option value="Complain">Complain</option>
        <option value="Deposit">Deposit</option>
        <option value="Transfer">Transfer</option>
        <option value="Registration">Registration</option>
      </select>

                <Button className={rr.btn}
                onClick={handleClick}
                title="Next"
                color='white'
                width="100%"
                background='#0452CE'
                 />

<div onClick={handleClk} className=' w-fit flex items-center cursor-pointer  bg-[#0452CE] mt-[50px] p-[5px] rounded-[10px] ml-[78%] text-white sm:mt'>no appointment</div>


{/* {randomNum && <Success/>} */}
    </div>   
    </div> 
  
  )
}

export default ConfirmSuccess