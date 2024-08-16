import { BrowserRouter, Routes,Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Reviews from "./pages/Reviews"
import Address from "./pages/Address"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Reviews" element={<Reviews/>}/>
        <Route path="/Address" element={<Address/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
