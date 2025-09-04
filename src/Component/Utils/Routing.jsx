import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import MainPort from '../Pages/MainPort'
import Footer from '../Pages/Footer'
import Aplayground from '../Pages/Aplayground'
import BMIcalc from '../Playgroung/BMIcalc'
import Contact from '../Pages/Contact'
// import Home from '../Portfolio/Home'
// import BackOne from '../Playgroung/BackOne'

const Routing = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<profile />} /> */}
        <Route path="/" element={<MainPort />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Aplayground" element={<Aplayground />}>
            <Route path="bmicalc" element={<BMIcalc />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default Routing