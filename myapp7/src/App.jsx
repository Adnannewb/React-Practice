import { Link, Outlet,NavLink } from "react-router-dom"


export default function App(){
  return(
    <div>
      <h1 className="flex justify-center items-center text-2xl font-bold m-4">Learning React Routing</h1>
      {/* <nav>
       <Link to='/'>Home</Link>
       <Link to='about'>About</Link>
       <Link to='contact'>ContactUs</Link>
      </nav> */}
      <nav className="flex gap-4 bg-slate-400 p-4 m-4 text-white">
        <NavLink to='/home' className={({isActive})=> isActive && 'text-blue-700 font-bold'}>
          Home
        </NavLink>
        <NavLink to='/about' className={({isActive})=> isActive &&'text-blue-700 font-bold'}>
          About
        </NavLink>
        <NavLink to='/contact' className={({isActive})=> isActive &&'text-blue-700 font-bold'} >
          ContactUs
        </NavLink>
      </nav>
      <Outlet/>
    </div>


  )
}