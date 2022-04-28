import { useState } from "react";
import Mainfooter from "../../Mainfooter/Mainfooter";
import Navbar from "../../Navbar/Navbar";
import tab from './Set.module.css';

function Set4() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Short circuit Z5.0</p>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 2K</p>
        </div>
      </div>
      {/* <a href="https://rzp.io/l/TScCTTEKn" className={tab.regbutton}>register</a> */}
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
          Successfully design circuit with provided components.           </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>02:00 PM</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>6 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>50</p>
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
            <li className={tab.p}>Only individuals will be allowed to compete.</li>
            <li className={tab.p}>Unethical behaviour could lead to disqualification. Faculty-coordinators have all the rights to take final decisions for any matter during the event.</li>
            <li className={tab.p}>The decision of the judges will be final and abiding. Argument with judges in any form will  lead to the disqualification.</li>
            <li className={tab.p}>Only provided tools can be used. </li>
            <li className={tab.p}>Safety precautions must be taken.</li>
            <li className={tab.p}>Components/tools should not be damaged.</li>
            <li className={tab.p}>Should complete within time limit.</li>
            <li className={tab.p}>Circuit design and provided components will be decided by coordinators.</li>
            <li className={tab.p}>The one who successfully completes the circuit first will be the winner.</li>
            <li className={tab.p}>Certificates of Participation will be given to all participants.</li>
            <li className={tab.p}>Final decision will be taken by the judging panel. </li>

          </ul>
          
        </div>

        <div
          className={toggleState === 3 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Vishnu K B</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>vv887733@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+919526661563" aria-hidden="true">+91 9526661563 </a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Gokuljith</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>gokuljith2001@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+919074293951" aria-hidden="true">+91 9074293951 </a></li>
            </ul>
            
          </div>
          
        </div>
      </div>
    </div>
    <Mainfooter/>
  </>
  );
}

export default Set4;