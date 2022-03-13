import React, { StrictMode } from 'react'
import './Index.css'
import Event from './Events/Event'
import Schedule from './Schedule/Schedule'
import Navbar from './Navbar/Navbar'


export default function Index() {
  return (
    <StrictMode>
      <div className='main'>
        <Navbar />
        <Event />
        <Schedule />
        <Event />
      </div>  
    </StrictMode>
  )
}
