import { BrowserRouter, Routes,Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Reviews from "./pages/Reviews"
import Address from "./pages/Address"
import BookingPage from "./components/Appoinment"


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
        <Route path="/Appoinment" element={<BookingPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
