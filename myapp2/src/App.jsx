import { useRef, useState } from 'react'

import './App.css'

// function App() {
//   // const [name, setName] = useState('')
//   // const [email, setEmail] = useState('')
//   // const [password, setPassword] = useState('')

//   const nameRef=useRef('')
//   const emailRef=useRef('')
//   const passwordRef=useRef('')

//   function handleForm(event){
//     event.preventDefault()
//     const name=nameRef.current.value
//     const email=emailRef.current.value
//     const password=passwordRef.current.value
//     alert(`Name: ${name} Email: ${email} Password: ${password}`)
//   }

//   function clearall(){
//     // setName('')
//     // setEmail('')
//     // setPassword('')

//     nameRef.current.value=''
//     emailRef.current.value=''
//     passwordRef.current.value=''
//   }
//   return (
//     <>
//     {/* <form onSubmit={handleForm}>
//       <input type="text" value={name} placeholder='Enter Your Name' onChange={(e)=>(setName(e.target.value))} />
//       <br />
//       <br />
//       <input type="text" value={email} placeholder='Enter Your Email' onChange={(e)=>(setEmail(e.target.value))} />
//       <br />
//       <br />
//       <input type="text" value={password} placeholder='Enter Your Password' onChange={(e)=>(setPassword(e.target.value))} />
//       <br />
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//     <br />
//     <br />
//     <button onClick={clearall}>Reset Form</button>
//     <br />
//     <br />
//     <h2>Live Preview: {name} : {email} : {password} </h2> */}

//     <form onSubmit={handleForm}>
//       <input type="text"  placeholder='Enter Your Name' ref={nameRef} />
//       <br />
//       <br />
//       <input type="text"  placeholder='Enter Your Email' ref={emailRef} />
//       <br />
//       <br />
//       <input type="text"  placeholder='Enter Your Password' ref={passwordRef} />
//       <br />
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//     <br />
//     <br />
//     <button onClick={clearall}>Reset Form</button>


//     </>
//   )
// }

// export default App

// export default function App(){
//   const [selected,setSelected]=useState({
//     HTML:false,
//     CSS:false,
//     JS:false
//   })
//   function changehtml(e){
//     console.log(e.target.checked)
//     setSelected({...selected,HTML:e.target.checked})
  
//   }
//   function changecss(e){
//     console.log(e.target.checked)
//     setSelected({...selected,CSS:e.target.checked})
    
//   }
//   function changejs(e){
//     console.log(e.target.checked)
//     setSelected({...selected,JS:e.target.checked})
    
//   }
//   function reset_checkbox(){
//     setSelected({HTML:false,CSS:false,JS:false})
//   }

//   return(
//     <div>
//     <label ><input type="checkbox" checked={selected.HTML} onChange={changehtml} /> HTML</label>
//     <label > <input type="checkbox" checked={selected.CSS} onChange={changecss} /> CSS</label>
//     <label > <input type="checkbox" checked={selected.JS} onChange={changejs} /> Js</label>
//     <br />
//     <br />
//     <button onClick={reset_checkbox}>Reset Checkbox</button>
//     <br />
//     <br />
//     <h1>Selected</h1>
//     <br />
//     <br />
//     <ul>
//       {selected.HTML&& <li>HTML</li>}
//       {selected.CSS&& <li>CSS</li>}
//       {selected.JS&& <li>JS</li> }
//     </ul>

//     </div>
//   )
// }

export default function APP(){
  const [gender,setGender]=useState('')
  const [country,setCountry]=useState('')

  const countries=['Bangladesh','Maldives','Japan','Norway','England','Spain','Vietnam']
  return(
    <>
     <h1>Select A Gender</h1>
     <label ><input type="radio" value='male' checked={gender ==='male'} name='gender' onChange={(e)=>(setGender(e.target.value))} /> Male</label> 
     <label ><input type="radio" value='female' checked={gender ==='female'} name='gender' onChange={(e)=>(setGender(e.target.value))} /> Female</label> 
     <label ><input type="radio" value='other' checked={gender ==='other'} name='gender' onChange={(e)=>(setGender(e.target.value))} /> Other</label> 
      <br />
      <br />
     <h2>Selected Gender: {gender}</h2>

     <div>
      <h1>Select Dropdown Country</h1>
      <select name="country" value={country} onChange={(e)=>(setCountry(e.target.value))}>
        {/* <option value="Bangladesh">Bangladesh</option>
        <option value="Maldives">Maldives</option>
        <option value="Japan">Japan</option>
        <option value="Norway">Norway</option>
        <option value="England">England</option> */}
        {countries.map((country,index)=>(
          <option key={index} value={country}>{country}</option>
        ))}
        
      </select>
      <br />
      <button onClick={()=>(setCountry(''))}>Clear Dropdown</button>
      <br />
      <br />
      <h2>Selected Country: {country}</h2>
     </div>
    </>
  )
}