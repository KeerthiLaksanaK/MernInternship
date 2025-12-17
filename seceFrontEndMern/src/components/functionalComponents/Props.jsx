const Props = (props) =>{
    return(
        <div>
            <p>This is Props Component</p>
            <ol>
                <li>Props are:</li>
                <ul>
                    <li>{props.hi}</li>
                    <li>I completed my {props.grade} grade by the age of {props.age}</li>
                    <li><img src={props.img}></img></li>
                </ul>
            </ol>
        </div>
    )
}
export default Props;