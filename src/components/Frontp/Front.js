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
          <div id="zdescription"> 
            <p id='z1'>college of engineering cherthala</p>
            <p id='z2'>presents</p>
          </div>
            <div className='logocont'>
              <Fade top>

              <img src={logo} className='logo' alt='logo' />
              </Fade>
              <Fade bottom>

              <p className='title'>ZEALOUS 5.0</p>
              
              <p className='caption'>Explore the New Horizon</p>

              <div id='desc'>
                <p id='desc1'>Zealous Is The 5th Techfest Of College Of Engineering Cherthala, Zealous</p>
                <p id='desc2'>Aims To Promote Innovations Of Budding Engineers To Explore And</p>
                <p id='desc3' >Exploit Diverse Talents In Various Spheres</p>
              </div>
              </Fade>
              <div className='bottom'>

            <div class="scroll">
              <div className="boxx1"></div>
              <div className="boxx2"></div>
            </div>
              <div className='events'>
                <a className='eventbtn' href='/#events'>Events</a>
              </div>
            
              </div>
            </div>
            
        </div>
    </section>

    </div>
    </>
  )
}