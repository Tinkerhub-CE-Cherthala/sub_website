
import workshop from '../../images/wrench.png';
import competition from '../../images/competition.png';
import gen from '../../images/general.png';
import Eventcss from './Event.module.css'
import React from 'react';
import { Link } from 'react-router-dom';
import {useEffect} from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Fade from 'react-reveal'


function Event() {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);

    return (
        <div class={Eventcss.outer} id='events'>
            <div class={Eventcss.event}>
          <Fade top>
    <p>Events</p>
  </Fade>
  </div>
  <div class={Eventcss.section2}>
  <div class ={Eventcss.container}>
    
    <div class = {Eventcss.card} data-aos="fade-up">
      <div class = {Eventcss.image}>
       
        <img src = {workshop} alt='workshop'  />
       
      </div>
      <div class = {Eventcss.content}>
      <Link to='/workshops' className={Eventcss.linkview}>
        <div class={Eventcss.view}>
          view
        </div>
      </Link>    
      <p className={Eventcss.subdetail}>Workshop</p>
      </div>
    </div>
    <div class = {Eventcss.card} data-aos="fade-up">
      <div class = {Eventcss.image}>
       
        <img src = {competition} alt='competition'  />
       
      </div>
      <div class = {Eventcss.content}>
      <Link to='/competitions' className={Eventcss.linkview}>
        <div class={Eventcss.view}>
          view
        </div>
      </Link>    
      <p className={Eventcss.subdetail}>Competition</p>   
      </div>
    </div>
    <div class = {Eventcss.card} data-aos="fade-up">
      <div class = {Eventcss.image}>
       
        <img src = {gen} alt='ece'  />
       
      </div>
      <div class = {Eventcss.content}>
      <Link to='/general' className={Eventcss.linkview}>
        <div class={Eventcss.view}>
          view
        </div>
      </Link>    
      <p className={Eventcss.subdetail}>General</p>   
      </div>
    </div>
    
      
  </div>
</div>
      
        </div>    
    );
}

export default Event;
