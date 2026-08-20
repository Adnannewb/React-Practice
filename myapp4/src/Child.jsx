import { useFormStatus } from "react-dom"
import { memo } from "react";

function Child({setMsg}){
    // const {pending}=useFormStatus()
    // console.log(pending)
    // console.log("Child Component Rendered !")

    return(
        // <div className="flex flex-col items-center justify-center h-screen">
        //     <input className="border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" ref={props.ref} type="text" placeholder="Enter something..." />
        // </div>
        // <>
        // <input type="text" placeholder='Name'/>
        // <br />
        // <br />
        // <input type="text" placeholder='Roll' />
        // <br />
        // <br />
        // <button className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600" type="submit" disabled={pending} >{pending?'Submittting...':'Submit'}</button>
        // </>
        // <>
        // <h1 className="text-2xl font-bold">This is child Component, {name}</h1>
        // </>

        // <>
        // {children}
        // <p className="text-gray-600">I passed this name through props+children {name}</p>

        // </>

        <div>
            <h1 className="text-2xl font-bold">This is Child A</h1>
            <input className="border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"  type="text" onChange={(e)=>(setMsg(e.target.value))} />
        </div>
    )
}
export default memo(Child);