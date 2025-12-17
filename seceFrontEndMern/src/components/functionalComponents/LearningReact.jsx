import Props from "./Props";
import State from "./State";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseEffectAPI from "./Hooks/UseEffectAPI";
import UseRef from "./Hooks/UseRef";
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./Hooks/UseCallback";
const LearningReact =()=>{
    return(
        <div className="learning-react-container">
            <h1>Learning React</h1>
            <p>This is a comprehensive guide to React concepts and hooks</p>
            
            <section id="props">
                <h2>Props Example</h2>
                <Props hi="Welcome to Props" grade="12" age="17" img="public/vite.svg"/>
            </section>
            
            <section id="state">
                <h2>State Example</h2>
                <State/><hr />
            </section>
            
            <section id="usestate">
                <h2>useState Hook</h2>
                <UseState/><hr />
            </section>
            
            <section id="useeffect">
                <h2>useEffect Hook</h2>
                <UseEffect/><hr />
                <UseEffectAPI/><hr />
            </section>
            
            <section id="useref">
                <h2>useRef Hook</h2>
                <UseRef/><hr />
            </section>
            
            <section id="usememo">
                <h2>useMemo Hook</h2>
                <UseMemo/><hr />
            </section>
            
            <section id="usecallback">
                <h2>useCallback Hook</h2>
                <UseCallback/>
            </section>
        </div>
    )
}
export default LearningReact;