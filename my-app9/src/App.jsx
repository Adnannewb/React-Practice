// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [name, setName] = useState("")
//   const [age, setAge] = useState("")
//   const [members, setMembers] = useState([])


//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     setMembers([...members,{name,age}])
//     setAge("")
//     setName("")
    
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//           <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
//           <input type="number" placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value) }/>
//       <button type='submit'>Submit</button>    
//       </form>
      
//       <div>
//         {members.map((member)=>(
//           <>
//           <h1>{member.name}</h1>
//           <p>{member.age}</p>
//           </>
//         ))}
//       </div>
//     </>
//   )
// }

// export default App

// import { useState } from "react";
import Counter from "./Counter";
import Display from "./Display";
import CounterProvider from "./CounterProvider";
export default function App(){
  // const [count,setCount]=useState(0)
  return(
    // <>
    //   <Counter count={count} setCount={setCount} />
    //   <Display count={count}/>
    // </>
    <>
    <CounterProvider>
      <Counter  />
      <Display />
    </CounterProvider>
      
    </>
  )
}