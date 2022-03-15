import React, {useEffect} from 'react'
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
                    <p class="name">event0</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event1</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event1</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event1</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event1</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event1</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event1</p>
                    <p class="time">time</p>
                </li>
            </ul>
            <ul class="table" id="day2" >
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event0</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event1</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event2</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event3</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event1</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event1</p>
                    <p class="time">time</p>
                </li>
                <li class="prog1" data-aos="fade-up">
                    <p class="name">event1</p>
                    <p class="time">time</p>
                </li>
            </ul>
        </nav>
    </>
  )
}
