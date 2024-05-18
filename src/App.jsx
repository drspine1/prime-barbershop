import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavBar from "./pages/navBar"
import Home from "./pages/home"
import Footer from "./pages/footer"
import About from "./pages/about"
import Contact from "./pages/contact"
import Service from "./pages/service"
import Gallery from "./pages/gallery"
import ScrollToTop from "./component/scrollToTop"
import Appointment from "./pages/appointment"
function App() {
return (
    <>
   <BrowserRouter>
    <ScrollToTop/>
   <NavBar/>
   <Routes>
    <Route  index element={<Home/>}/>
    <Route  path="about" element={<About/>}/>
    <Route  path="contact" element={<Contact/>}/>
    <Route  path="service" element={<Service/>}/>
    <Route  path="gallery" element={<Gallery/>}/>
    <Route  path="appointment" element={<Appointment/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
