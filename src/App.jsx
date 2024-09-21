import Address from "./components/Address"
import Banner from "./components/Banner"
import Blog from "./components/Blog"
import Copyright from "./components/Copyright"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Learnmore from "./components/Learnmore"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Slogo from "./components/Slogo"
import Supplier from "./components/Supplier"

function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Banner/>
      <Supplier/>
      <Gallery/>
      <Services/>
      <Learnmore/>
      <Slogo/>
      <Blog/>
      <Address/>
      <Footer/>
      <Copyright/>
    </>
  )
}

export default App
