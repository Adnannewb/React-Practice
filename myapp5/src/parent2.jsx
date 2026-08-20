import { useUser } from "./UserContext"

export default function Parent2(){
    const {user,setUser}=useUser();
    return(
        <div>
        <h1>This is Parent 2</h1>
        <h2>{user.name='Hamim'}</h2>
        </div>
        
    )
}