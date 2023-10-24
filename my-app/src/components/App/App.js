import React  from 'react'
import './App.css' 
import Card from '../Card/Card';


const App = () => {
  const boys =[{name:"amr",age:26},{name:"ahmed",age:25},{name:"ali",age:30}];

 
  return (
    <div className='mainContent'>
    <h1>boys</h1>
    <Card namesList={boys} type="men"></Card> 
    </div>
  )
}

export default App

