import React, {useState}  from 'react'
import './App.css' 
import Card from '../Card/Card';

// state is the holder of the state (data or he array) 
// the second parameter(setstate) is used to update the data for example if i need to add value inside the array i use setstate instead of push
const App = () => {

  const[state,setState]=useState(   // i make destruction for usestate()
    [{name:"amr",age:26},{name:"ahmed",age:25},{name:"ali",age:30}]  
 )

 
  return (
    <div className='mainContent'>
    <h1>boys</h1>
    <Card namesList={state} type="men"></Card> 
    </div>
  )
}

export default App

