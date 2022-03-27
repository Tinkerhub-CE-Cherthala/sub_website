import React, { StrictMode } from 'react'
import './Index.css'
import Event from './Events/Event'
import Schedule from './Schedule/Schedule'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Footer from './footer/Footer'
import Front from './Frontp/Front'
import Preconnect from './Preconnect/Preconnect'

export default function Index() {
  return (
    <StrictMode>

        {/* <Preconnect /> */}
        
        <Navbar />
        
        <div className='head'>
        <Front />

        </div>
      <div className='main'>
        <Event />
        <Schedule />
        <About />
        <Footer />
      </div>  
    </StrictMode>
  )
}
