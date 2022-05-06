import { useState } from "react";
import Mainfooter from "../../Mainfooter/Mainfooter";
import Navbar from "../../Navbar/Navbar";
import tab from './Ws.module.css';

function Ws6() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Solder spin</p>
      {/* <a href="https://rzp.io/l/kG1YtwRMM2" className={tab.regbutton}>register</a> */}
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
          Stay strong like iron.............</p>
          <p className={tab.p}>
          But, Sometimes the slogan ain't  works when iron becomes the softer material to makes some bonds stronger.......
Well, Leaving all the condradictions, we  announce our workshop......

          <p className={tab.p}>"The Solder Spin"</p>
          </p>
          <p className={tab.p}>
          Its all about soldering.... Bonding... And winning....!
          </p>
          <p className={tab.p}>
          The workshop will teach you the art of melting metal to connect circuits!
          </p>
          <p className={tab.p}>
          So we invite you all to learn from scratch! 
          The best hands who keeps the bonds stronger will be rewarded.!
          So, Come, solder, win, go!!!
          </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>11:00 AM</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>6,7 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>100</p>
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
            <li className={tab.p}>Group of maximum 2 members.</li>
            <li className={tab.p}>Spot registration is possible.</li>
            <li className={tab.p}>Students without college ID is not permitted.</li>
            <li className={tab.p}>Group with perfect and neat soldered will be the winner. </li>
            <li className={tab.p}>All the rights are reserved with event organizer commite.</li>
            

          </ul>
          
        </div>

        <div
          className={toggleState === 3 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Sreelakshmi B </li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>sreelakshmi605@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+916282843546" aria-hidden="true">+91 6282843546</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Abin Cherian George</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>abingeorge10005@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+919544438679" aria-hidden="true">+91 9544438679</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Anandu C S</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>9846683951.com@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+919446290210" aria-hidden="true">+91 9446290210</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    <Mainfooter/>
  </>
  );
}

export default Ws6;
