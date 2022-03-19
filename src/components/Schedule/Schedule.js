
import './Schedule.css';
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Schedule() {
    useEffect(()=>{
        Aos.init({duration: 1000});
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