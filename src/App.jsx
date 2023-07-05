import React from 'react'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Program from './program/Program'
import Choose from './choose/Choose'
import Plans from './plans/Plans'
import Bmi from './bmi/Bmi'
import Footer from './footer/Footer'
import Contact from './contact/Contact'

function App() {
  return (
    <>
   <Navbar/>
   <Home/>
    <Program/>
    <Choose/>
    <Plans/>
    <Bmi/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
