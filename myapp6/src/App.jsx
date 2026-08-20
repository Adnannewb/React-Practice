import { useEffect } from 'react'
import { useActionState } from 'react'
import { useState } from 'react'
import useFetch from './useFetch'

function App() {
  // const [msg, setMsg] = useState()
  // const [message,formAction,pending]=useActionState(sendfeedback,'')

  // async function sendfeedback(prevState,formData){
    
  //   const name=formData.get('name')
  //   const feedback=formData.get('feedback')
  //   await new Promise((resolve) => {
  //     setTimeout(resolve,2000)
      
  //   })

  //   if (name && feedback){
  //     return `Thank you ${name}. Your feedback has been recorded successfully.`
  //   }
  //   else{
  //     return "Fill out all the fields, Please."
  //   }
  // }

  // without custom hook
  // const [data,setData]=useState(null)

  // useEffect(()=>{
  //   async function fetchusers(){
  //     const response=await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data=await response.json()
  //     setData(data);
  //   }
  //   fetchusers();
  // },[])

  // with custom hook
  const data=useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    // <>
    //   <h1>Learning Use Action State</h1>

    //   <form action={formAction}>
    //     <input type="text" name='name' placeholder='Enter Your Name' />
    //     <br />
    //     <br />
    //     <textarea name="feedback" id="feedback" placeholder='Enter Your Feedback' onChange={(e)=>(setMsg(e.target.value))}></textarea>
    //     <br />
    //     <br />
    //     <button type="submit" disabled={pending}>Submit</button>
    //   </form>
    //   <br />
    //   <br />
    //   <h2>Live Preview: {msg}</h2>
    //   <br />
    //   <br />
    //   <p>{message}</p>
    // </>
    <>
      {/* <h1>Without Custom Hook</h1> */}
      <h1>With Custom useFetch Hooks</h1>
      <ul>
        {data && data.map((user)=>(
          <li key={user.id}>{user.name} - {user.username} - {user.email}</li>
       ))}
      </ul>
    </>
  )
}

export default App
