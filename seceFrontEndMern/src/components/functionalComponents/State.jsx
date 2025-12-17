import { useState } from "react";
const State = () => {

    const [state, updateState] = useState("state");
    const setState = () => {
        updateState("State Updated");
    }
    return(
        <div>
            <p>This is {state} Component </p>
            <button onClick={setState}>Update</button>
        </div>
    )
}
export default State;