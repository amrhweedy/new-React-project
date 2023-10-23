import React  from "react"; // i get React object from react class
import ReactDom from 'react-dom'; // ReactDom creates virtual dom in runtime
import App from './components/App'


// ReactDom.render( 
//             // i render the hello world inside the element which has id "root" (this element is div exists in index.html)
//    <div>
//        <h1>hello world </h1>
//   </div>,  // >>> this code is not html but it jsx
//   document.getElementById("root")
// )


ReactDom.render( 
  <App/>,
document.getElementById("root")
)