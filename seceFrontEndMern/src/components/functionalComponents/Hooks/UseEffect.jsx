import {useEffect,useState} from "react";
const UseEffect = ()=>{
    var [text,updateText]=useState("");
    useEffect(()=>{
        console.log(text);
    },[text])
return(
    <>
    <h2>This is UseEffect Hook</h2>
    <input type="text" value={text} onChange={(e)=>{updateText(e.target.value)}}/>
    </>
)
}
export default UseEffect;