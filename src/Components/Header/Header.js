// import React, { useState } from 'react'
// import {NavLink, Link } from 'react-router-dom'
// import prom from "./header.module.css"
// import Button from '../Buttons/Button'
// import Main from '../Main/Main'
// import { useNavigate} from 'react-router-dom'
// // import { useState } from 'react'
// import { AiOutlineMenu } from "react-icons/ai";
// import { MdOutlineCancel } from "react-icons/md";


// function Header() {
//   const Navigate= useNavigate()
//   const [isActive, setActive]= useState(false)

//   const handleButtonClick = () => {
//  Navigate ('/')
//   };

//   const mobileMenu= ()=>{
//     setActive(!isActive)
//   } 

//   return (
//     <div className={prom.head}>
//         <h1 className='text-[34px]'>P<span style={{color:"#0452CE"}}>Design</span></h1>

//         {/* <div className={prom.top}> */}
//         {/* <ul onClick={mobileMenu} className={isActive?'prom.navUlmobile':'prom.navUl'} > */}
//         <ul className={isActive ? `${prom.navUl} ${prom.navUlMobile}` : prom.navUl}>          <li><NavLink to="/about" className={prom.links}>About</NavLink></li>
//             <li><NavLink to="/contact" className={prom.links}>Contact</NavLink></li>
//            <li> <NavLink to="/services" className={prom.links}>Services</NavLink></li>
//         {/* </ul> */}
    

//         {/* <Button onClick={handleButtonClick}
//         color='white'
//         width='184px'
//         title='Appointment'/> */}

// <span className="text-white bg-[#0452CE] text-[18px] px-[10px] py-[2px] rounded-[10px] " onClick={handleButtonClick}>Appointment</span>
      
//         </ul>
//         {/* </div> */}

//         <button className={prom.btn} onClick={mobileMenu}>{isActive ? <MdOutlineCancel size={34}  /> : <AiOutlineMenu size={34}/> }
//        </button> 
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import prom from "./header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate} from 'react-router-dom'

function Header() {
  const [isActive, setActive] = useState(false);

  const Navigate= useNavigate()
    const handleButtonClick = () => {
   Navigate ('/')
    };

  const mobileMenu = () => {
    setActive(!isActive);
  };

  return (
    <div className={prom.head}>
      <h1 className='text-[34px]'>P<span style={{color:"#0452CE"}}>Design</span></h1>

      
      <ul className={`${prom.navUl} ${isActive ? prom.navUlMobile : ''}`}>
        <li><NavLink to="/about" className={prom.links}>About</NavLink></li>
        <li><NavLink to="/contact" className={prom.links}>Contact</NavLink></li>
        <li><NavLink to="/services" className={prom.links}>Services</NavLink></li>
      
      <span className="text-white bg-[#0452CE] cursor-pointer text-[18px] px-[10px] py-[2px] rounded-[10px] " onClick={handleButtonClick}>Appointment</span>
      </ul>

      
      <button className={prom.btn} onClick={mobileMenu}>{isActive ? <MdOutlineCancel size={34} /> : <AiOutlineMenu size={34} />}</button>
    </div>
  );
}

export default Header;
