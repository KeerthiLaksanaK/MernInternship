import { useState } from 'react'
const UseState = () =>{
    const [number, setNumber] = useState(0);
    const [text, updateText] = useState("");

    const subTract = () =>{
        setNumber(number-1)
    }
    const addTion = () =>{
        setNumber(number+1)
    }
    const reSet = () =>{
        setNumber(0)
    }
    return(
        <div>
            {/* <h1>UseState Hook Example</h1> */}
            <button onClick={subTract}>-</button>
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            <button onMouseEnter={addTion}>+</button>
            <button onDoubleClick={reSet}>Reset</button>
            <br />
            <h2>Text Typing</h2>
            <input type="text" value={text} onChange={(e)=>updateText(e.target.value)} />
            <button onDoubleClick={reSet}>Reset</button>
        </div>
    )
}
export default UseState;    