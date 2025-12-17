import { useEffect, useState } from "react";
import axios from "axios";

const UseEffectAPI = ()=>{
    const [postParameter,setPostsParameter]=useState([]);
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            setPostsParameter(res.data);
        })
        .catch(()=>{
            console.log("Can't get the API Data");
        }); 
    },[postParameter]);
return(
    <>
    <h1>UseEffectAPI Component</h1>
    <p>It is going to fetch data from json typicode placeholder</p>
    <ol>
        <p>The API values which fetched was </p>
        {postParameter.map((postTitle)=>(
            <li key={postTitle.id}>{postTitle.title}</li>
        ))}
    </ol>
    </>
)   
}
export default UseEffectAPI;