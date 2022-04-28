import { useState } from "react";
import Mainfooter from "../../Mainfooter/Mainfooter";
import Navbar from "../../Navbar/Navbar";
import tab from './Ws.module.css';

function Ws5() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Advanced driver-assistance systems (ADAS) & Machine Learning</p>
      <a href="https://rzp.io/l/M0rPeZM" rel="noopener noreferrer" target="_blank" className={tab.regbutton}>register</a>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Mode: Online</p>
        </div>
      </div>
      <div className={tab.bloctabs}>
        <button
          className={toggleState === 1 ? `${tab.tabs} ${tab.activetabs}` : tab.tabs}
          onClick={() => toggleTab(1)}
          >
          Description
        </button>
        
        <button
          // className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          className={toggleState === 2 ? `${tab.tabs} ${tab.activetabs}` : tab.tabs}
          onClick={() => toggleTab(2)}
          >
          Contact
        </button>
      </div>

      <div className={tab.contenttabs}>
        <div
          className={toggleState === 1 ? `${tab.content}  ${tab.activecontent}` : tab.content}
        >
          <p className={tab.p}>
          Advanced driver-assistance systems (ADAS) are electronic systems in a vehicle that use advanced technologies to assist the driver. Often referred to as “active safety”   </p>
          <p className={tab.p}>
          Machine Learning involves Artificial Intelligence that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Zealous presents a workshop based on the most relevant topics related to ADAS & Machine Learning. 
          </p>         
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>07:45 PM</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>6 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>500</p>
            </div>
          </div>
        </div>


        <div
          className={toggleState === 2 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Sanoop S</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>sanoopsv1@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+918078713683" aria-hidden="true">+91 8078713683</a></li>
            </ul>
            
          </div>
          
        </div>
      </div>
    </div>
    <Mainfooter/>
  </>
  );
}

export default Ws5;