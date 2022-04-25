import React from 'react'
import './Front.css';
import logo from '../../images/logo thick 1.png'
import Fade from 'react-reveal'

export default function Front() {
  return (
    <>
    
    <div className='project' id='home'>
    
    <section class="sec" id="sec1">
        <div class="contain">
          <div clsassName="zdescription"> 
            <p>college of engineering cherthala</p>
            <p>presents</p>
          </div>
            <div className='logocont'>
              <Fade top>

              <img src={logo} className='logo' alt='logo' />
              </Fade>
              <Fade bottom>

              <p className='title'>ZEALOUS 5.0</p>
              
              <p className='caption'>Explore the New Horizon</p>
              </Fade>
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