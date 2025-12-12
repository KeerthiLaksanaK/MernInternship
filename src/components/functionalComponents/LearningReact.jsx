import Props from "./Props";
import State from "./State";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseEffectAPI from "./Hooks/UseEffectAPI";
import UseRef from "./Hooks/UseRef";
import UseMemo from "./Hooks/UseMemo";
const LearningReact =()=>{
    return(
        <div>
            <h1>Learning React</h1>
            <p>This is a simple React Component</p>
            
            <section>
                <h2>Props Example</h2>
                <Props hi="Welcome to Props" grade="12" age="17" img="public/vite.svg"/>
            </section>
            
            <section>
                <h2>State Example</h2>
                <State/><hr />
            </section>
            <section>
                <h2>UseState Example</h2>
                <UseState/><hr />
                <UseEffect/><hr />
                <UseEffectAPI/><hr />
                <UseRef/><hr />
                <UseMemo/><hr />
            </section>
        </div>
    )
}
export default LearningReact;