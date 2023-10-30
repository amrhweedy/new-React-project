import React from 'react'
import styles from './Form.module.css'

const Form = (props)=>{
  return <form onSubmit={props.onSubmit}>{props.children}</form>
}

  const Controller = (props) => {
  return (
    <div className={styles.control}>{props.children}</div>
  )
}

Form.Controller = Controller  // the form is method (component) it has controller (component) and at the same time the controller is function 
                              // so the form function contains the controller function 
export default Form

// js function is an object , it contains properties and methods