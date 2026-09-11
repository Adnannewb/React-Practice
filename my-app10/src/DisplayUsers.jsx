import { useEffect, useState } from 'react'
export default function DisplayUsers(){
    const[data,setData]=useState([])
    const[error,setError]=useState("")
    const[isLoading,setIsLoading]=useState(true)
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res)=>{
    //         if(!res.ok){
    //         throw new Error("Something went wrong")}
    //         return res.json()})
    //     .then((data)=>setData(data))
    //     .catch((err)=>setError(err.message))
    //     .finally(()=>setIsLoading(false))

    // },[])

    //Modern pattern 
    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
                const res=await fetch('https://jsonplaceholder.typicode.com/users')
                if(!res.ok){
                    throw new Error("Something went wrong")}
                const data=await res.json()
                setData(data)

            }
            catch(err){
                setError(err.message)
            }
            finally{
                setIsLoading(false)

            }
        }
        fetchUsers()
    },[])

    if(isLoading){
        return <p>Loading</p>
    }
    return(
        <>
        <h1>Displaying users from json placeholder</h1>
        {data.map((user)=>(
            <p>{user.name} - {user.email}</p>
        ))}
        <h2>{error}</h2>
        </>
    )
}