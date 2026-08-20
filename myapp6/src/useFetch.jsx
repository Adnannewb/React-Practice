import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url){
const [data,setData]=useState(null)

  useEffect(()=>{
    async function fetchusers(){
      const response=await fetch(url);
      const data=await response.json();
      setData(data);
    }
    fetchusers();
  },[url])
  return data
};