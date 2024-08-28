import React from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Work from './Component/Work'
import Testimonial from './Component/Testimonial'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Contact from './Component/Contact'
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      
     <Home/>
     <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
