import { useState,useRef, useTransition, useMemo } from 'react'
import Child from './Child'
import ChildB from './ChildB'
export default function App() {
  // const [count, setCount] = useState(0)
  // const inputRef = useRef(null)

  // const focusinput = () => {
  //   alert("Input is focused and border color changed to red")
  //   inputRef.current.focus()
  //   inputRef.current.style.border = "2px solid red"
  // }

  // const handlesubmit= async()=>{
  //   await new Promise((resolve)=>setTimeout(resolve,2000));
  //   console.log('Form Submitted');
    
  // }

  // const [isPending,startTransmission]=useTransition()

  // const handleClick=()=>{
  //   startTransmission(
  //     async()=>{
  //       await new Promise((resolve)=>setTimeout(resolve,2000));
  //     }
  //   )
    
  // }

  // const [number,setNumber]=useState(10)
  // const expensiveComputation = (num) => {
  //   console.log("Expensive Computation Running...")
  //   let result = 0
  //   // FIX 1: Changed i+1 to i++ to avoid infinite loop
  //   for (let i = 0; i < 1000000; i++) { 
  //     result = result + num
  //   }
  //   return result
  // }
  // const result=expensiveComputation()
  // const result = useMemo(() => expensiveComputation(number), [number])

  const [msg,setMsg]=useState('')

  return (
    // <div className="flex flex-col items-center justify-center h-screen">
    //     <Child ref={inputRef}/>
    //     <button className="bg-blue-500 text-black py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600" onClick={focusinput}>Focus Input</button>
      
    // </div>
    // <div>
    //   {/* <h1>Form Submission using UseFormStatus</h1>
    //   <form action={handlesubmit}>
        
    //     <Child/>
    //   </form> */}

    //   {/* <h1 className="text-2xl font-bold mb-4">UseTransition Hooks</h1>
    //   <p className="text-gray-600">{isPending&&'Loading.....'}</p>
    //   <button className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600" onClick={handleClick} disabled={isPending} >Click Me</button> */}


    //   {/* <h1 className="text-2xl font-bold">REACT MEMO</h1>
    //   <p className="text-gray-600">This is a simple example of React Memo</p>
    //   <h2 className="text-xl font-semibold">Count:{count}</h2>
    //   <Child name={"React"}/>
    //   <button className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600" onClick={()=>(setCount(count+1))}>Increment</button>
    //   <button className="bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-red-600" onClick={()=>(setCount(count-1))}>Decrement</button> */}


    // </div>

    // <div>
    //   <p className="text-gray-600">This is a simple example of React useMemo Hooks</p>
    //   <h2 className="text-xl font-semibold">Count: {count}</h2>
    //   <h2 className="text-xl font-semibold">Result: {result}</h2>
      
    //   {/* Clicking these will now update count INSTANTLY without triggering the expensive calculation */}
    //   <button className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600" onClick={() => setCount(count + 1)}>Increment</button>
    //   <button className="bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-red-600" onClick={() => setCount(count - 1)}>Decrement</button>
    // </div>

    // <div>
    //   <h1 className='text-2xl font-bold '>Children Props</h1>
    //   <Child name={'Rohit'}>
    //     <h2 className="text-xl font-semibold ">childern props components</h2>
    //   </Child>
    // </div>
    // <div>
    //   <h1 className='text-2xl font-bold '>Children Props</h1>
    //   <Child name={'Rohit'}>
    //     <h2 className="text-xl font-semibold ">childern props components</h2>
    //   </Child>
    // </div>

    <div>
      <h1 className='text-2xl font-bold'>State Lifting in react</h1>
      <Child setMsg={setMsg}></Child>
      <ChildB msg={msg}></ChildB>
    </div>

  )
}

