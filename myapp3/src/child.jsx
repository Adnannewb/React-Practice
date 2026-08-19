import { useEffect } from "react"

export default function Child({count,data}){
    // useEffect(()=>{
    //     console.log('Clicked')
    // },[count,data])
    useEffect(()=>{
        console.log('Count Cliked')
    },[count])
    useEffect(()=>{
        console.log('Data Clicked')
    },[data])

    return(
        <>
        <h1 style={{color:'tomato'}} >Count: {count}</h1>  {/* inline css */}
        <h1>Count: {data}</h1>
    </>)
}