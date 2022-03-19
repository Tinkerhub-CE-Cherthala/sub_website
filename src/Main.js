import React from 'react'
import { Link } from 'react-router-dom';
import './Main.css';
import logo from './images/logo thick 1.png'
import Index from './components/Index';

export default function Main() {
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
        
            <div class="scroll"></div>
            
        </div>
    </section>
        <Index className="sec1"/>

    </div>
    </>
  )
}
