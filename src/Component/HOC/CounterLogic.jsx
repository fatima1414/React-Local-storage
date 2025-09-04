import { useState } from "react";
const CounterLogic = (InnerComponent)=>{
    return ()=>{
        const [count,setCount] = useState(0)
        const inc = () =>{
            setCount((prev) => prev + 1 )
        }
         const dec = () =>{
            setCount((prev) => prev > 0 ?prev-1:prev )
        }
        return <InnerComponent count = {count} plus ={inc} minus={dec}/>
    }
}
export default CounterLogic