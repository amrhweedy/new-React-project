import React,{useState} from 'react'
import Form from  '../Layout/Form'
import Button from '../Layout/Button';




const AddUser = () => {

    const [userState,setUserState]=useState({
        name:'',
        age:''
    })

    const onSubmitHandler=(e) => {
        e.preventDefault();
        console.log(userState)
       }
  
       const AddUserHandler=(e) => {
            const key = e.target.id;  // the key is the id which in the input (name and age) 
            const value = e.target.value;
           // setUserState({...userState,[key]:value})   
           setUserState((prevState)=>{
            console.log(prevState)
            return {...prevState,[key]:value}
           })
       }
  return (
    <Form onSubmit={onSubmitHandler}>
    <Form.Controller>
     <label htmlFor='name'>Name</label>
     <input type='text' id='name' placeholder='Enter Name' value={userState.name}  onChange={AddUserHandler} />
     </Form.Controller>     
     <Form.Controller>
     <label htmlFor='age'>Age</label>
     <input type='text' id='age' placeholder='Enter Age' value={userState.age} onChange={AddUserHandler}  />
     </Form.Controller>     
     <div style={{marginTop:'20px'}}>
      <Button type='submit'>save</Button>
      <Button style={{marginLeft: '20px'}} type='reset'>reset</Button>
     </div>     
 </Form>
  )
}

export default AddUser
