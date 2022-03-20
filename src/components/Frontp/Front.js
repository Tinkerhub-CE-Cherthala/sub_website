import React from 'react'
import { Link } from 'react-router-dom';
import './Front.css';
import logo from '../../images/logo thick 1.png'

export default function Front() {
  return (
    <>
    
    <div className='project' id='main'>
    <section class="sec" id="sec1">
        <div class="contain">
            <div className='logocont'>
              <img src={logo} className='logo' alt='logo' />
              <p className='title'>ZEALOUS 3.0</p>
              <p className='caption'>Explore the New Horizon</p>
            </div>
        
            <div class="scroll">
              <div className="boxx1"></div>
              <div className="boxx2"></div>
            </div>
            
        </div>
    </section>

    </div>
    </>
  )
}