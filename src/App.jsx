import Navbar from "./components/functionalComponents/Navbar";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/functionalComponents/Home";
import About from "./components/functionalComponents/About";
import LearningReact from "./components/functionalComponents/LearningReact";
import Contact from "./components/functionalComponents/Contact";

function App() {
// const h1Style={
//   backgroundColor:"pink",
//   textAlign:"center",
//   color:"blue"
// }
  return (
     <header>
      <main>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/learn-react" element={<LearningReact/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
        </main>
   
    </header>
  )
  
}

export default App