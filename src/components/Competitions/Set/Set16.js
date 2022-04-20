import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import tab from './Set.module.css';

function Set16() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>WAVE DIMENSION </p>
      
      <a href="https://rzp.io/l/TScCTTEKn" className={tab.regbutton}>register</a>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 4K</p>
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
          className={toggleState === 2 ?  `${tab.tabs} ${tab.activetabs}` : tab.tabs}
          onClick={() => toggleTab(2)}
          >
          Rules 
        </button>
        <button
          // className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          className={toggleState === 3 ? `${tab.tabs} ${tab.activetabs}` : tab.tabs}
          onClick={() => toggleTab(3)}
          >
          Contact
        </button>
      </div>

      <div className={tab.contenttabs}>
        <div
          className={toggleState === 1 ? `${tab.content}  ${tab.activecontent}` : tab.content}
        >
          <p className={tab.p}>
          A Wavefom Generation Competition where a particular waveform will be provided & to generate the same by designing the circuit themselves with a time duration of 30 minutes.         </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>4K</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>4 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>30</p>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <p className={tab.rules}>
            Rules
          </p>
          <ul>
            <li className={tab.p}>It is an individual event.</li>
            <li className={tab.p}>There will be only 1 question regarding wave generation.</li>
            <li className={tab.p}>Time duration will be 30 minutes.</li>
            <li className={tab.p}>Candidates will be judged on the basis of accuracy of the generated wave and its output as well as the time taken. </li>
            <li className={tab.p}>Deadline for registration:  </li>
            

          </ul>
          
        </div>

        <div
          className={toggleState === 3 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
          <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Muhammad Thamim K R </li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>muhammedthamimkr618@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+916282704060" aria-hidden="true">+91 6282704060</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Akshara CR</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>aksharacr187@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+919072396141" aria-hidden="true">+91 9072396141</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Set16;