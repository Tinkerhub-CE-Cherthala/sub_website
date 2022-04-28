import React from 'react'
import './Front.css';
import logo from '../../images/logo thick 1.png'
import Fade from 'react-reveal'


export default function Front() {
  return (
    <>
    
    <Fade>
    <div className='project' id='home'>

    <section class="sec" id="sec1">
        <div class="contain">
          <div id="zdescription"> 
            <div id='z1'>College of engineering cherthala</div>
            <p id='z2'>presents</p>
          </div>
            <div className='logocont'>
              <Fade top>

              <img src={logo} className='logo' alt='logo' />
              </Fade>
              <Fade bottom>

              <p className='title'>ZEALOUS 5.0</p>
              
              <p className='caption'>Explore the New Horizon</p>


              <div className='titledate'>
                <p>May 6th & 7th</p>
              </div>

              <div id='desc'>
                <p id='desc1'>Every improvement or innovation begin with an idea.But an idea is a only possibility - a small beginning that must be nurtured, developed ,engineer, tinkered with, championed,tested, implemented and checked ideas have no value until they are implemented</p>
              </div>
              </Fade>
              <div className='bottom'>
            <a href='/#events'>


            <div class="scroll">
              <div className="boxx1"></div>
              <div className="boxx2"></div>
            </div>
            </a>
              {/* <div className='events'>
                <a className='eventbtn' href='/#events'><Arrowdown/> </a>
              </div> */}
            
              </div>
            </div>
            
        </div>
    </section>

    </div>
    </Fade>
    </>
  )
}