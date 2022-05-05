import { useState } from "react";
import Mainfooter from "./../Mainfooter/Mainfooter";
import Navbar from "./../Navbar/Navbar";
import tab from './Day.module.css';

function Day() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Web 3 & Blockchain</p>
      
      <div className={tab.bloctabs}>
        <button
          className={toggleState === 1 ? `${tab.tabs} ${tab.activetabs}` : tab.tabs}
          onClick={() => toggleTab(1)}
          >
          Day 1
        </button>
        
        <button
          // className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          className={toggleState === 2 ? `${tab.tabs} ${tab.activetabs}` : tab.tabs}
          onClick={() => toggleTab(2)}
          >
          Day 2
        </button>
      </div>

      <div className={tab.contenttabs}>
        <div
          className={toggleState === 1 ? `${tab.content}  ${tab.activecontent}` : tab.content}
        >
          
          <ul class="table" id="day1" >
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Inauguration</p>
                    <p class="time">9:00 AM</p>
                </li>
                    
                <li class="prog1" data-aos="fade-up">
                    <p class="name">Ethical Hacking Workshop Day 1</p>
                    <p class="time">10:00 AM</p>
                </li>

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
          
        </div>


        <div
          className={toggleState === 2 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >

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
                    <p class="name">Quiz – O – Phile(Round 1)</p>
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
                    <p class="name">Quiz – O – Phile(Final round) </p>
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
          
          
        </div>
      </div>
    </div>
    <Mainfooter/>
  </>
  );
}

export default Day;