import React from 'react'
import prm from './button.module.css'

const Button = ({
  className, type, onClick, title,padding, background, color, width, style, height, ...rest
})=> {
const styleBtn = {
  width: width || "542.72px",
  // background: background || "#125AD0",
  // color: color || " #125AD0",
  padding: padding || '5px',
  height:height || 'auto',
  // className:"className",
  ...style
};                 

  return (   
    // `${prm.btn} ${prm.btnHover}`       
    
        <button className={prm.btn} onClick={onClick} style={styleBtn} type={type} >{title}</button>
  
  )                                                                                                         
}

export default Button