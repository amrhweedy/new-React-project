import React, {useState}  from 'react'
import './App.css' 
import Card from '../Card/Card';

// state is the holder of the state (data or he array) 
// the second parameter(setstate) is used to update the data for example if i need to add value inside the array i use setstate instead of push
const App = () => {

const[cardToggle,setCardToggle]=useState(false);

  const[state,setState]=useState(   // i make destruction for usestate()
    [{name:"amr",age:26},{name:"ahmed",age:25},{name:"ali",age:30}])

 const deleteHandler = (event,clickIndex)=>{

  //const reminder = state.filter((ele,index)=> clickIndex !==index )
  //setState(reminder);  // ميتفعش اغير في الستيت علطول المفروض اخد منه نسخه الاول وبعدين اعدل عليها وبعدين ارجع النسخه بعد التعديل ذي ما عملت هنا 
 // console.log(state)  // لو عندي 3 عناصر ومسحت عنصر وطبعت الستيت هتجبلي الاراي وفيها ال 3 عناصر يعني بتجبلي القيمه اللي اتمسحت كمان لان الستيبت هي اسينك يعني مش ضامن انها ترجعلي اخر قيمه بس ودا اللي بيحصل هنا بترجعلي القيمه اللي اتمسحت كمان

// another solution
 setState((prevState)=>{
  return prevState.filter((ele,index)=> clickIndex!==index);
 })
 console.log("inside",state) // هيطبع الستيت القديم يعني ال 3 عناصر 
}

console.log("outside",state) //هيطبع احدث ستيت يعني هيطبع عنصرين بس

const handlerToggle =()=>{
  setCardToggle(!cardToggle);}

  return (      // here there is the latest updated version of state 
               //اللي مكتوب داخل الرترن هو اللي هيتعرض
    <div className='mainContent'>
    <h1>boys</h1>
    {
      // another solution for onclick
      //<button style={{marginBottom:"20px"}} onClick={handlerToggle}>{cardToggle?"hide names" :"show names"} </button>
    } 
    <button style={{marginBottom:"20px"}} onClick={()=>setCardToggle(!cardToggle)}>{cardToggle?"hide names" :"show names"} </button>
    <div className={cardToggle? "show" :"hide"}>
       <Card namesList={state} type="men" deleteHandler={deleteHandler} ></Card> 
    </div>
    </div>
  )
}

export default App

