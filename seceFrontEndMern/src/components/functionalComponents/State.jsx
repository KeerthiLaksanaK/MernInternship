import {useState } from "react";
const State=()=>{
     let [state,updateState]=useState("State");
     function setState(){
        updateState("State Updated");
     }
    return(
        <div >
            <p>This is a {state} Component</p>
            <button onClick={setState}>Update</button>
        </div>
    )
}
export default State;