import general from '../../images/general.png';
import ece from '../../images/ece.png';
import eee from '../../images/eee.png';
import cse from '../../images/computer.png';
import Eventcss from './Event.module.css'
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';


function Event() {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);

    return (
        <div class={Eventcss.outer}>
            <div class={Eventcss.event}>
    <p>Events</p>
  </div>
  <div class={Eventcss.section2}>
  <div class ={Eventcss.container}>
    
    <div class = {Eventcss.card} data-aos="fade-up">
      <div class = {Eventcss.image}>
       
        <img src = {ece} alt='ece'  />
       
      </div>
      <div class = {Eventcss.content}>
      <Link to='/general/List' className={Eventcss.linkview}>
        <a class={Eventcss.view}>
          view
        </a>
      </Link>    
      <p className={Eventcss.subdetail}>Workshop</p>
      </div>
    </div>
    <div class = {Eventcss.card} data-aos="fade-up">
      <div class = {Eventcss.image}>
       
        <img href = "#" src = {ece} alt='ece'  />
       
      </div>
      <div class = {Eventcss.content}>
      <Link to='/general/List' className={Eventcss.linkview}>
        <a class={Eventcss.view}>
          view
        </a>
      </Link>    
      <p className={Eventcss.subdetail}>Workshop</p>   
      </div>
    </div>
    <div class = {Eventcss.card} data-aos="fade-up">
      <div class = {Eventcss.image}>
       
        <img href = "#" src = {ece} alt='ece'  />
       
      </div>
      <div class = {Eventcss.content}>
      <Link to='/general/List' className={Eventcss.linkview}>
        <a class={Eventcss.view}>
          view
        </a>
      </Link>    
      <p className={Eventcss.subdetail}>Workshop</p>   
      </div>
    </div>
    
      
  </div>
</div>
      
        </div>    
    );
}

export default Event;
