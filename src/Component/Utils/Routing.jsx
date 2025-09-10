import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // ✅ Correct import
import About from '../Pages/About';
import MainPort from '../Pages/MainPort';
import Footer from '../Pages/Footer';
import Aplayground from '../Pages/Aplayground';
import BMIcalc from '../Playgroung/BMIcalc';
import Contact from '../Pages/Contact';
import ScrollToTop from '../Portfolio/ScrollToTop';

const Routing = () => {
  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPort />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aplayground" element={<Aplayground />} />
          <Route path="/aplayground/bmicalc" element={<BMIcalc />} />
        </Routes>
        <Footer />
    </>
  );
};

export default Routing;
