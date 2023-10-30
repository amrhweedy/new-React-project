import React from 'react'

const Button = (props) => {
  return (
    <button 
        style={props.style} onClick={props.onClick}
        type={ props.type ? props.type : 'button' }
        >
        {props.children}
    </button>
  )
}

export default Button
