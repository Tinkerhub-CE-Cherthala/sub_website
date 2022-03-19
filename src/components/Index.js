import React, { StrictMode } from 'react'
import './Index.css'
import Event from './Events/Event'
import Schedule from './Schedule/Schedule'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Footer from './footer/Footer'

export default function Index() {
  function abc(){
    document.disnav.style.display='none';
  }
  return (
    <StrictMode>
      <div className='main'>
        <div className='disnav' onScroll={abc}>
          <Navbar />
        </div>

        <Event />
        <Schedule />
        <About/>
        <Event />
        <Footer />
      </div>  
    </StrictMode>
  )
}
