import { useState } from "react"

export default function TestComponent() {
    const[value,Setvalue]=useState("")
    const handleUserInput=(newValue)=>{
        Setvalue(newValue);
    }
  return (
    <div>
      {/* <h1>This is from Test Component</h1> */}
      <h1>Practicing user input with state</h1>

      <div>
        <input type="text" onChange={(e)=>(handleUserInput(e.target.value))} />
        <h2>Live Preview</h2>
        <p>{value}</p>
      </div>
    </div>
  )
}