import { useState } from "react";

export default function Input(){
    const [name,setName]=useState('')

    function handleChange(event){
        setName(event.target.value)
    }

    return(
        <div>
            <input type="text" value={name} placeholder="Enter Your name" onChange={handleChange}/>
            <h1>Life preview: {name}</h1>
            <button onClick={()=>(setName(''))}>Clear Input</button>
        </div>
    )
    
}