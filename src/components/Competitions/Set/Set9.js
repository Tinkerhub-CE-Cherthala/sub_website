import { useState } from "react";
import Mainfooter from "../../Mainfooter/Mainfooter";
import Navbar from "../../Navbar/Navbar";
import tab from './Set.module.css';

function Set9() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Crypto-Busters </p>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 5K</p>
        </div>
      </div>
      <a href="https://rzp.io/l/oTX1aR1Al" rel="noopener noreferrer" target="_blank" className={tab.regbutton}>register</a>
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
          An Algorithm Decoding Competition in which the participants should figure out an alogorithm hidden in the description given.       </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>11:00 AM</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>7 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>250</p>
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
            <li className={tab.p}>A team event in which participants needs to figure out an algorithm hidden in the given description.</li>
            <li className={tab.p}>The team must consists of exactly 2 members.</li>
            <li className={tab.p}>First member need to figure out the encryption algorithm and the second member need to figure out the decryption algorithm from the given description.</li>
            <li className={tab.p}>The first member need to encrypt a given message to cipher text and the second member need to decrypt the cipher text. </li>
            <li className={tab.p}>10 minutes will be given for general instructions.</li>
            <li className={tab.p}>The team members will not be allowed to see or talk to each other at time of event.</li>
            <li className={tab.p}>The team members who try to communicate with each other will be disqualified from the event.</li>
            <li className={tab.p}>The participants who encrypts and decrypts the message with in the specified time will be the winners.</li>
            <li className={tab.p}>If there is more than one team the team who took least time will be considered as winners.</li>
            <li className={tab.p}>The winning team will get a prize money of 8000 rs. And certificate of encouragement.</li>
          </ul>
          
        </div>

        <div
          className={toggleState === 3 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Devaraj P V</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>devarajperayil327@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+919946353821 " aria-hidden="true">+91 9946353821 </a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Anandhu G R</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>anandhugopakumar79@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+916238562691" aria-hidden="true">+91 6238562691</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Aswin S</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>aswinshajilias117@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+918714352805" aria-hidden="true">+91 8714352805</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    <Mainfooter/>
  </>
  );
}

export default Set9;