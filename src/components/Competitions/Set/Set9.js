import { useState } from "react";
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
      <a href="https://rzp.io/l/TScCTTEKn" className={tab.regbutton}>register</a>
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
          This challenge is for a team of exactly 2 members. A description about a text encryption algorithm will be given to both members and a message will be given to either one member. The member who got the message need to figure out the algorithm from the description and write the code to encrypt the given message. Encrypt the message using that program and handover the encrypted message to the second member. At the same time the second member need to figure out the decryption algorithm and write the program to decrypt the message which is encrypted by the first member.          </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time,Date</p>
              <p>4 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>50</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Prize pool</p>
              <p>1K</p>
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
              <li className={`${tab.highspace} ${tab.eventhead}`}>Ajmal Jaleel</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>ajmaljaleel5@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+919846065265" aria-hidden="true">+91 9846065265</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Gayathri Belraj</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>gayathribelraj20@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+918078873930" aria-hidden="true">+91 8078873930</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Set9;