import CounterLogic from "./CounterLogic";
import CounterUi from "./CounterUi";
import OtherUi from "./OtherUi";
const Counter1 = CounterLogic(CounterUi) 
const Counter2 = CounterLogic(OtherUi) 
const Final = () =>{
    return(
        <>
        <Counter1/>
        <Counter2/>

        </>
    )
}
export default Final