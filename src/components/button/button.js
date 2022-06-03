import React from 'react'
import './button.css'
export const Button = ({text, icon= null, func= null, pagNext=false}) => {
  return (
    <button className={pagNext? 'button pagNext'  :'button'} onClick={func}>
        {icon&&
            <i className={icon}></i>
        } 
        {text}
    </button>
  )
}
