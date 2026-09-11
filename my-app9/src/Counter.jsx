import { use } from "react"
import { CounterContext } from "./CounterProvider"

export default function Counter(){
    const {count,setCount}= use(CounterContext)
    return(
        <>
        <button onClick={()=>setCount(count+1)} >Increment</button>
        <button onClick={()=>setCount(count-1)} >Decrement</button>
        </>
    )
}