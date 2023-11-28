import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/normalize.css'
import './assets/css/supersized.css'
import './assets/css/templatemo-style.css'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Gallery from './components/gallery/gallery'
import Home from './components/home/home'
import Navigation from './components/navigation/navigation'

const App = () => {
  return (
    <>
  <Home/>
  <Navigation/>
  <About/>
  <Gallery/>
  <Contact/>
  <Footer/>
    </>
  )
}

export default App
