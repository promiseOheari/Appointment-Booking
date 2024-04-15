import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import prom from "./header.module.css"
import Button from '../Buttons/Button'
import Main from '../Main/Main'
import { useNavigate } from 'react-router-dom'

function Header() {
  const Navigate= useNavigate()

  const handleButtonClick = () => {
 Navigate ('/')
  };

  return (
    <div className={prom.head}>
        <h1 className='text-[34px]'>P<span style={{color:"#0452CE"}}>Design</span></h1>

        <div className={prom.top}>
        <ul className={prom.links}>
           <li><NavLink to="/about" className={prom.links}>About</NavLink></li>
            <li><NavLink to="/contact" className={prom.links}>Contact</NavLink></li>
           <li> <NavLink to="/services" className={prom.links}>Services</NavLink></li>
           
        </ul>
      

        <Button onClick={handleButtonClick}
        color='white'
        width='184px'
        title='Appointment'/>
        </div>
    </div>
  )
}

export default Header