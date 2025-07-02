// TO ADD FLOATING NAVBAR FROM ACERNITY UI


import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Projects } from "./components/Projects"
import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
// import Navbar from "./components/Navbar"
import AnimatedCursor from "react-animated-cursor";
import Layout from "./components/Layout"
import Experience from "./components/Experience"

function App() {

  return (
    <BrowserRouter>
         <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
        </Route>
        <Route path="/contact" element={<ContactMe/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/experience" element={<Experience/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
