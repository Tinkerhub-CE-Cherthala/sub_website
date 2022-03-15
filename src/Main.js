import React from 'react'
import { Link } from 'react-router-dom';
import './Main.css';
import logo from './images/logo thick 1.png'

export default function Main() {
  return (
    <>
    <section class="sec" id="sec1">
        <div class="contain">
            <div className='logocont'>
              <img src={logo} className='logo' />
              <p className='title'>ZEALOUS</p>
              <p className='caption'>Explore the New Horizon</p>
            </div>
        
            <Link to='/main'>
            <div class="scroll"></div>
            </Link>
        </div>
    </section>
    </>
  )
}
