import React from 'react'
import p from './regError.module.css'
import Button from '../Buttons/Button'
import prr from '../Main/Main.module.css'
import { CgDanger } from "react-icons/cg";
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

function RegError() {

  const Navigate= useNavigate()
  const  handleClick=()=>{
    Navigate("/")
  }
  return (
    <div>           
    <Header/> 
    <div className={p.book}>
      
     <div className={p.container}>
        {/* <h2 className=' text-[30px] text-[]'>Appointment Booking</h2> */}

         <CgDanger size={58} color='#F76972' />

       <p className='w-[569px] text-[24px] mb-[50px] mt-[30px] text-center  '>An unexpected error has occurred.  Please check your internet  setting  and try again.</p>

        <Button 
        onClick={handleClick}
        title="Back"
        color='white'
        background='#0452CE'/>
    </div>
</div>
 </div>
  )
}

export default RegError