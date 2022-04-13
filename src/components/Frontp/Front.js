import React from 'react'
import './Front.css';
import logo from '../../images/logo thick 1.png'

export default function Front() {
  return (
    <>
    
    <div className='project' id='home'>
    <section class="sec" id="sec1">
        <div class="contain">
            <div className='logocont'>
              <img src={logo} className='logo' alt='logo' />
              <p className='title'>ZEALOUS 3.0</p>
              <p className='caption'>Explore the New Horizon</p>
            </div>
            
        </div>
    </section>

    </div>
    </>
  )
}