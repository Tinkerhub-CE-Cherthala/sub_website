
import './Schedule.css';
import React,{useEffect, useState} from 'react';
import react from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Schedule() {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
   
        return (
            <>
        <div class="cont">
        <Link to='/Days' style={{textDecoration : 'none'}}>    
            <button class="click" data-aos="fade-up">Schedule</button>
        </Link>    
    </div>
    </>
  )
}


export default Schedule;