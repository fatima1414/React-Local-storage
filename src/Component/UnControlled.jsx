import { useRef ,useState } from "react";
const UnControlled =()=>{
    const setName = useRef("")
    const setEmail = useRef("")

       function signup (e){
        e.preventDefault()
        console.log(name); 
     }
     var inputColor={color:"red",backgroundColor:"lightgray"}
     return (
        <>
        <form action="" onSubmit={signup}>
            <input type="text" style={{color:"red",backgroundColor:"gray"}} ref={setName} placeholder="enter name"/>
            <input type="text" style={inputColor} ref={setEmail} placeholder="enter name"/>
            <input type="text" className="textColor"placeholder="enter number"/>
            <button>submit</button>
        </form>
        </>
     )

}
export default UnControlled