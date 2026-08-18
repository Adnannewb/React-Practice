import './App.css'
import User from './User'
import { useState } from 'react'
import Hobby from './Hobby'
import Input from './Input'

function App() {
  // const [count, setCount] = useState(0)
  // const isloggedIn=true
  // let user={
  //   'name':'Test',
  //   'age':23,
  // }

  // let arr=[1,2,4,5,6]

  // function add(a,b){
  //   return a+b
  // }
  // return (
  //  <div>
  //   <h1>Welcome to My App</h1>
  //   <p>I am creating this </p>
  //   <User/>
  //   <p>{isloggedIn ? "Welcome ":"Please Login" } </p>  {/* ternary operator */}
  //   <p>{isloggedIn && "Welcome User " }</p>  {/* AndOR operator */}
  //   <h1>Name: {user.name} age: {user.age} </h1>
  //   <h3>Array: {arr[2]} </h3>
  //   {arr.map((num,index)=>(
  //     <h3>index: {index} and number for that index: {num}</h3>
  //   ))}
  //   <h4>Addition: {add(3,4)} </h4>
  //   {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbB_HAiEv8fMbFIiPaZiLOaqEei0GG1C6152QLa27tzw&s=10" alt="" /> */}

  //   <button onClick={()=>(alert('Clicked!!'))}>Click Me</button>
  //  </div>
  // )

  
  // const [isloggedIn,setIsloggedIn]=useState(true)
  // const [show,setShow]=useState(true)

  // function loggedIn(){
  //   if (isloggedIn){
  //     setIsloggedIn(false)
  //   }
  //   else{
  //     setIsloggedIn(true)
  //   }
  // }

  // return(
  //   <div>
  //     {isloggedIn? <h1>Welcome User</h1>: <h1>Please Login !</h1> }

  //     <button onClick={loggedIn}>Change LoggedIn</button>

  //     <button onClick={()=>(setShow(!show))}>{show?"Hide":"Show"} Details</button>
  //     {show&& <User/>}
  //   </div>
  // )

  // const name="Raju"
  // const fruits=['apple','mango','Orange','Banana']
  // const details={
  //   name:"Raju",
  //   age:23,
  //   dream:"Big"
  // }
  const [hobby,setHobby]=useState();
  
  return(
    <div>
      {/* <User name="Raju" /> */}
      {/* <User name={name} fruits={fruits} details={details} /> */}
      
      {/* {hobby && <Hobby name={hobby}/>}

      <button onClick={()=>(setHobby('Cricket'))}>Show hobby</button> */}

      <Input/>

     

    </div>
  )
  

}

export default App


