import React from "react"
import Card from '../Card/Card'

const CardList = ({namesList,deleteHandler})=>{      // here the props is object contains the array (datalist) which is in the app component (parent) and i send it to the card comp (child)
      
    const cards =  namesList.map(({id,...otherprops})=>( 
            <Card key={id} id={id} {...otherprops} deleteHandler={deleteHandler} ></Card>
     ));

    return <div>{cards}</div>   
}
export default CardList;