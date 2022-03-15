import React, { StrictMode } from 'react'
import './Index.css'
import Event from './Events/Event'
import Schedule from './Schedule/Schedule'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Footer from './footer/Footer'

export default function Index() {
  return (
    <StrictMode>
      <div className='main'>
        <Navbar />
        <Event />
        <Schedule />
        <About/>
        <Event />
        <Footer />
      </div>  
    </StrictMode>
  )
}
