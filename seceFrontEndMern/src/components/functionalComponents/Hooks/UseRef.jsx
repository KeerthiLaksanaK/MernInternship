import { useRef, useState,useEffect } from 'react';

const UseRef =()=>{
    var [text,setText]=useState("");
    var prevText=useRef("");
    useEffect(()=>{
        prevText.current=text;
    },[text])
    return(
        <>
        <h1>This is UseRef Hook</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <h2>The current render is {text}</h2>
        <h3>The previous render is {prevText.current}</h3>
        </>
    )
}   
export default UseRef;