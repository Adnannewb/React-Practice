import {useEffect , useState } from 'react'

// import './App.css'
import Child from './child'
import Hello from './hello'
import Add from './Add'
function App() {
  // const arr=[1,2,4,5,7,8,9,10]
  const [count,setCount]=useState(0)
  const [data,setData]=useState(0)
  
  // useEffect( () => {
  //       console.log('Mounted')
  //       }, []);
  
  // useEffect(()=>{
  //   // console.log('Component Updated')
  //   if(data>2 && count>1){
  //     console.log('Component Updated')
  //   }
  // },[count,data])

  const buttonStyleObject = {
  backgroundColor: '#DFFF00', // Vibrant lemon color (or use 'lemonchiffon' for a pale pastel yellow)
  color: '#1a1a1a',          // Dark charcoal text for high contrast readability
  fontSize: '20px',
  fontWeight: '600',         // Makes the text slightly bold and crisp
  padding: '12px 24px',      // Vertical and horizontal spacing inside the button
  border: 'none',            // Removes the default ugly browser border
  borderRadius: '8px',       // Smooth, modern rounded corners
  cursor: 'pointer',         // Shows the hand icon when a user hovers over it
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  transition: 'all 0.2s ease-in-out', // Smooths out visual changes
};
  function add(num1,num2){
    return num1+num2

  }
  return (
    <>
     {/* <h1>Hello</h1>
      {arr.filter((num)=>num>5).map((num=>(
        <h2>{num}</h2>
      )))} */}
      {/* <h1>Count: {count}</h1> */}
      
      <Hello/>
      <br />
      <br />
      <Child count={count} data={data}/>
      <button style={buttonStyleObject} onClick={()=>(setCount(count+1))} >increament Count</button>
      <br />
      <br />
      {/* <h1>Data: {data}</h1> */}
      <button style={buttonStyleObject} onClick={()=>(setData(data+2))} >increament Data</button>
      <br />
      <br />
      <Add add={add} num1={4} num2={6} />
      <Add add={add} num1={10} num2={20} />
      <Add add={add} num1={1000} num2={90} />
      
    </>
  )
}

export default App
