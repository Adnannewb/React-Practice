import { use } from "react"
import { CounterContext } from "./CounterProvider"

export default function Display(){
    const {count}= use(CounterContext)
    return(
        <>
        <h1>{count}</h1>
        </>
    )
}
