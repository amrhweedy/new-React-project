import React from "react"
import styles from "./Card.module.css"

const Card = (props)=>{      // here the props is object contains the array (datalist) which is in the app component (parent) and i send it to the card comp (child)
    console.log (props)
    
    const cards =  props.namesList.map((ele , index)=>( 
    <div 
      className={styles.cardWrapper}
      key={index}
      style={{background: props.type==="men"? "green" :"pink"}}>
       <div>{ele.name}</div>
       <div>{ele.age}</div>
       <div className={styles.deleteButton}>x</div>
</div> ));

    return <div>{cards}</div>   
}
export default Card;