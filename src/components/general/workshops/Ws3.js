import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import tab from './Ws.module.css';

function Ws3() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Electric Vehicles</p>
      <a href="https://rzp.io/l/TScCTTEKn" className={tab.regbutton}>register</a>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Mode: Hybrid ( Online & Offline )</p>
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
          Transportation is evolving and we need to get ready. The electric vehicle revolution is here and you can be a part of it.   </p>
          <p className={tab.p}>
          Zealous presents a workshop on the latest advancements and challenges to the Electric Vehicle Industry. 
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
              <p>7 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>20</p>
            </div>
          </div>
        </div>


        <div
          className={toggleState === 2 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Nimmy Abraham</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>nimmyabraham369@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+919496369180" aria-hidden="true">+91 9496369180</a></li>
            </ul>
            
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Ws3;