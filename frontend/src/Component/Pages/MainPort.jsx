import React from 'react';
import WebTemp from '../Portfolio/WebTemp';
import Dailog from '../Portfolio/Dailog';
import Skills from '../Portfolio/Skills';
import Experience from '../Portfolio/Experience';
import About from '../Pages/About';
import Hero from '../Portfolio/Hero';

const MainPort = () => {
  return (
    <>
      <Hero />
      <Experience />
      <WebTemp />
      <Skills />
      <About />
      <Dailog />
    </>
  );
};

export default MainPort;