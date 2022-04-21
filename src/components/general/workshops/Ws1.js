import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import tab from './Ws.module.css';

function Ws1() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Ethical Hacking</p>
      <a href="https://rzp.io/l/TScCTTEKn" className={tab.regbutton}>register</a>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Mode: offline</p>
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
          The constantly evolving world of Ethical hacking presents new challenges of detecting latent vulnerabilities in an application, system, or organization's infrastructure which can be readily exploited by modern day attackers. Want to kick-start your career in this ever evolving field of Ethical Hacking ?     </p>
          <p className={tab.p}>
          Zealous  presents a workshop on Ethical Hacking where, you will be able to uncover a lot about the world of cybersecurity and potential vulnerabilities that can exist in computer systems and computer networks of today's world.
          </p>
          <p className={tab.rules}>
          Requirements
          </p>
          <p className={tab.p}>
          A Laptop with atleast i3 or i5 processor of 4GB RAM. 
          </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>10:00 AM</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>6,7 May</p>
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
              <li className={`${tab.highspace} ${tab.eventhead}`}>Rahuldev P A</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>rdev6996@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+917736113137" aria-hidden="true">+91 7736113137</a></li>
            </ul>
            
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Ws1;