import { useState } from "react";
import Mainfooter from "../../Mainfooter/Mainfooter";
import Navbar from "../../Navbar/Navbar";
import tab from './Ws.module.css';

function Ws4() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Managerial Workshop</p>
      <a href="https://rzp.io/l/Ima2Bnw" rel="noopener noreferrer" target="_blank" className={tab.regbutton}>register</a>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Mode: Offline</p>
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
          This workshop conducted by  Mohammed Ikan, Communication coaching & outbound  training  consultant, intends to create a conscience on what an employer looks for from a student and the vital skills necessary to bridge the gap between institutional learning and corporate expectations.  </p>
                
         <p className={tab.rules}>Topic</p>
         <p>Corporate Expectations & Future Skills</p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>10:00 AM</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>6 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>350</p>
            </div>
          </div>
        </div>


        <div
          className={toggleState === 2 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Anainika A</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>noojaanu@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+917561852930" aria-hidden="true">+91 7561852930</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Veena Venu Gopal K S</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>veenavenugpl05@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+917994335132" aria-hidden="true">+91 7994335132</a></li>
            </ul>
            
          </div>
          
        </div>
      </div>
    </div>
    <Mainfooter/>
  </>
  );
}

export default Ws4;