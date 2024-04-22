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
    <div className="bg-[#f5f5f5] flex flex-col items-center justify-center h-[100vh] w-full sm:w-2/4 mx-auto px-10">

         <CgDanger size={58} color='#F76972' />

       <p className=' text-[24px] mb-[50px] mt-[30px] text-center  text-[#0452CE]'>An unexpected error has occurred.  Please check your network and try again.</p>

        <Button 
        onClick={handleClick}
        title="Back"
        color='white'
        width="90%"
        background='#0452CE'/>
    </div>
// </div>
//  </div>
  )
}

export default RegError