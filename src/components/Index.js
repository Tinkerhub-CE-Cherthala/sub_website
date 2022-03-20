import React, { StrictMode } from 'react'
import './Index.css'
import Event from './Events/Event'
import Schedule from './Schedule/Schedule'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Footer from './footer/Footer'
import Front from './Frontp/Front'

export default function Index() {
  function abc(){
    document.disnav.style.display='none';
  }
  return (
    <StrictMode>
        
        <Navbar />
        
        <div className='head'>
        <Front />

        </div>
      <div className='main'>
        <Event />
        <Schedule />
        <About/>
        <Footer />
      </div>  
    </StrictMode>
  )
}
