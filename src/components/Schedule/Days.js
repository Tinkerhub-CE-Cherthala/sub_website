import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Day.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function Days() {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
    
    function day2(){
        var x = document.getElementById('day1');
    var y = document.getElementById('day2');
    var z = document.getElementById('btn');
        x.style.position="absolute";
        y.style.position="absolute";
        z.style.position="absolute";
        x.style.left="-100px";
        y.style.left="1px";
        z.style.left="50%";
        x.style.opacity="0";
        y.style.opacity="1";
    }
    function day1(){
        var x = document.getElementById('day1');
    var y = document.getElementById('day2');
    var z = document.getElementById('btn');
        x.style.position="absolute";
        y.style.position="absolute";
        z.style.position="absolute";
        x.style.left="1px";
        y.style.left="100px";
        z.style.left="0";
        x.style.opacity="1";
        y.style.opacity="0";
    }

  return (
    <>
        <Navbar />  
        <nav class="page" id='pag'>
            <div class="switch">
                <button class="button toggle" onClick={day1}>Day 1</button>
                <button class="button toggle" onClick={day2}>Day 2</button>
                <div id="btn"></div>
            </div>
            <ul class="table" id="day1" >
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Inauguration</p>
                    <p class="time">9:00 AM</p>
                </li>
                    <Link to='/EthicalHacking' className='hidedeco'>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Ethical Hacking Workshop Day 1</p>
                    <p class="time">10:00 AM</p>
                </li>
                    </Link>

                <li class="prog1" data-aos="fade-up">
                    <p class="name">Tectra</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Turnaround</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Prison Break</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Credorian</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Racezilla</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Tech Talk</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Mind Spark</p>
                    <p class="time">11:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Ohm decoder</p>
                    <p class="time">11:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Rainbow</p>
                    <p class="time">11:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Wave Dimension</p>
                    <p class="time">11:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Solder Spin</p>
                    <p class="time">11:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Tech Talk</p>
                    <p class="time">11:30 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Lunch Break</p>
                    <p class="time">12:00 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Risus</p>
                    <p class="time">1:30 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Dig the bug</p>
                    <p class="time">1:30 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Wiring</p>
                    <p class="time">02:00 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Saudi Vellakka Promotion</p>
                    <p class="time">03:00 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Zea-Mad</p>
                    <p class="time">06:00 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Electric Vehicles</p>
                    <p class="time">06:00 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">ADAS & Machine Learning</p>
                    <p class="time">07:45 PM</p>
                </li>
                
            </ul>
            <ul class="table" id="day2" >
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Ethical Hacking Workshop Day 2</p>
                    <p class="time">9:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Tectra</p>
                    <p class="time">9:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Managerial Workshop</p>
                    <p class="time">9:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Web 3 and Block Chain</p>
                    <p class="time">9:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Quiz (Round 1)</p>
                    <p class="time">9:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Risus</p>
                    <p class="time">9:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Prison Break</p>
                    <p class="time">9:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Sell and Win</p>
                    <p class="time">9:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Mind Spark</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Ohm decoder</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Rainbow</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Wave Dimension</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Solder Spin</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">EV workshop</p>
                    <p class="time">10:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Crypto Busters</p>
                    <p class="time">11:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Tech Talk</p>
                    <p class="time">11:00 AM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Lunch Break</p>
                    <p class="time">12:00 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Tech Talk</p>
                    <p class="time">01:30 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Bridge Making </p>
                    <p class="time">01:30 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Quiz Final round  </p>
                    <p class="time">03:00 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name"> Closing Ceremony</p>
                    <p class="time">04:30 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Band / DJ </p>
                    <p class="time">05:30 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Electric Vehicles</p>
                    <p class="time">06:00 PM</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">ADAS & Machine Learning</p>
                    <p class="time">07:45 PM</p>
                </li>
            </ul>
        </nav>
    </>
  )
}
