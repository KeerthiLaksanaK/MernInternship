const Props=(Props)=>{
    return(
        <div>
        <h1> This is Props Compoenet</h1>
        <ol>
            <li> Props are:</li>
            <ul>
                <li>{Props.hi}</li>
                <li>Grade:{Props.grade}</li>
                <li>Age:    {Props.age}</li>
                <li><img src={Props.img} alt="Image"/></li>
            </ul>
        </ol>
        </div>
    )
}
export default Props;