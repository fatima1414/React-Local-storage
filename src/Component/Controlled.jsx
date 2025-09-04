import { useState } from "react";
const Controlled = () =>{
    const [name,setName] = useState("")
     function signup (e){
        e.preventDefault()
        console.log(name); 
     }
     return (
        <>
        <form action="" onSubmit={signup}>
            <input type="text"  placeholder="enter name" onChange={(e)=>setName(e.target.value)}/>
            <button>submit</button>
        </form>
        </>
     )
}
export default Controlled