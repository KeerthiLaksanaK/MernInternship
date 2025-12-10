import Navbar from "./Navbar.jsx";
import "./css/App.css";
function App() {
const h1Style={
  backgroundColor:"pink",
  textAlign:"center",
  color:"blue"
}
  return (
    <header>
      <Navbar />
    
    <div>
    <h1 style={h1Style}>Welcome to JSX</h1>
    <h2 className="h2">This is a simple React Component</h2>
    <img src="vite.svg" alt="" style={{marginLeft:"100px",width:"500px",height:"500px"}}/>
    </div>
    </header>
  )
  
}

export default App