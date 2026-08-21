import { Link } from "react-router-dom"
export default function NotFound(){
    return(
        <>
        <h1 className="flex justify-center items-center text-2xl font-bold">Sorry ! 404 not Found</h1>
        <p className="flex justify-center items-center text-2xl ">You can go back to the Home page <Link className="text-3xl-700 font-bold m-4 underline" to='/'> Home </Link></p>
        </>
    )
}