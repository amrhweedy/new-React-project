import React from 'react'
import styles from './Card.module.css'

const Card = ({id,name,age,type,deleteHandler}) => {
    return ( <div 
        className={styles.cardWrapper}
        style={{background: type==="boy"? "green" :"pink"}}>
         <div>{name}</div>
         <div>{age}</div>
         <div className={styles.deleteButton} onClick={(event)=>deleteHandler(event,id)}>x</div>
  </div> );
}
 
export default Card;