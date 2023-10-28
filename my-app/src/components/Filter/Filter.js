import React,{useState} from "react"
import Styles from "./Filter.module.css"

const Filter=(props)=>{

const [filter,filterState]=useState();

const filterHandler=(e)=>{
filterState(e.target.value)
props.filterNames(e.target.value) 
}
return (
    <div className={Styles.mb} >
         <input type='text' placeholder='for test ref' value={filter} onChange={filterHandler}></input>    
    </div>
  )
}

export default Filter;