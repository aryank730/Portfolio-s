import React from 'react'
import { WebTemp, AppTemp } from '../Portfolio/WebTemp'
import Dailog from '../Portfolio/Dailog'
import OpenCards from '../Portfolio/OpenCards'
import Performance from '../Portfolio/Performence'
import Knowlwdge from '../Portfolio/Knowlwdge'
// import Homnes from '../Portfolio/Homnes'
import About from '../Pages/About'
import Hero from '../Portfolio/Hero'
// import Ontat from '../Portfolio/Ontat'
// import Projet from '../Portfolio/Projet'


const MainPort = () => {
  return (
    <>
      <Hero />
      {/* <Homnes/> */}
      <Performance />
      {/* <Projet/> */}
      <h3 className="text-3xl font-medium text-gray-700 text-center mb-4">Major Projects</h3>
      <WebTemp />
      <Dailog />
      <About />
      {/* <OpenCards/> */}


      <Knowlwdge />
      <AppTemp />
      {/* <Ontat/> */}
    </>
  )
}

export default MainPort
