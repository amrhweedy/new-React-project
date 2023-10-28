import React, {useState}  from 'react'
import './App.css' 
import CardList from '../CardList/CardList'
import Filter from '../Filter/Filter'
import Modal from '../Modal/Modal'

// state is the holder of the state (data or he array) 
// the second parameter(setstate) is used to update the data for example if i need to add value inside the array i use setstate instead of push
const App = () => {

const[cardToggle,setCardToggle]=useState(true);
const[filter ,filterState]=useState("");
const[showModal,setShowModalState]=useState(false);

  const[state,setState]=useState([  // i make destruction for usestate() 
  {
    id : 1,
    name:"amr",
    age:26,
    type:"boy"
  },
  {
    id : 2,
    name:"mona",
    age:25,
    type:"girl"

  },
  {
    id :3,
    name:"ali",
    age:30,
    type:"boy"
  },
  {
    id : 4,
    name:"ola",
    age:30,
    type:"girl"
  }
])

 const deleteHandler = (event,selectedId)=>{

  //const reminder = state.filter((ele,index)=> clickIndex !==index )
  //setState(reminder);  // ميتفعش اغير في الستيت علطول المفروض اخد منه نسخه الاول وبعدين اعدل عليها وبعدين ارجع النسخه بعد التعديل ذي ما عملت هنا 
 // console.log(state)  // لو عندي 3 عناصر ومسحت عنصر وطبعت الستيت هتجبلي الاراي وفيها ال 3 عناصر يعني بتجبلي القيمه اللي اتمسحت كمان لان الستيبت هي اسينك يعني مش ضامن انها ترجعلي اخر قيمه بس ودا اللي بيحصل هنا بترجعلي القيمه اللي اتمسحت كمان

// another solution
 setState((prevState)=>{
  return prevState.filter(ele=> ele.id!==selectedId);
 })
 console.log("inside",state) // هيطبع الستيت القديم يعني ال 3 عناصر 
}

console.log("outside",state) //هيطبع احدث ستيت يعني هيطبع عنصرين بس

const filterNames =(names)=>{
filterState(names)
}

const namesHandler = ()=>{
  if(filter.length !== 0){
    return state.filter((ele)=> ele.name.includes(filter))
  } 
  return state
}


  return (   
    <div className='mainContent'>
     <Modal showModal={showModal} closeModal={()=>setShowModalState(false)}></Modal>
    <h1>boys</h1>
    <button style={{marginBottom:"20px"}} onClick={()=>setCardToggle(!cardToggle)}>{cardToggle?"hide names" :"show names"} </button>
    <button className='btn' style={{marginBottom:"20px"}} onClick={()=>setShowModalState(true)}> create new record </button>
    <Filter filterNames={filterNames}></Filter>
    <div className={cardToggle? "show" :"hide"}>
       <CardList namesList={namesHandler()} deleteHandler={deleteHandler} ></CardList> 
    </div>
    </div>
  )
} 
export default App

// any value of the input will store in inputEl