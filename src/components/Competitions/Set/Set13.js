import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import tab from './Set.module.css';

function Set13() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>RAINBOW</p>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 2K</p>
        </div>
      </div>
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
          A Colour Code Detection Competition for Resistors by finding the values of the provided resistors with certain specific time limit.        </p>
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
              <p>20</p>
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
            <li className={tab.p}>Resistors, papers, pen will be provided to individuals at the venue.</li>
            <li className={tab.p}>Only registered participants are allowed to participate.</li>
            <li className={tab.p}>Spot registration is possible. </li>
            <li className={tab.p}>Partcipants who finds the value of all provided resistors using colour code method before or within
the specified time will be the winner.</li>
            <li className={tab.p}>If one or more participants become the winners, prize money will be shared among them.</li>
            <li className={tab.p}>Absent or late participants will be disqualified without returning the registration fee.</li>
            <li className={tab.p}>Use of mobile phones, calculators, digital watch or any other kind of electronic devices are strictly prohibited.</li>
            <li className={tab.p}>Any kind of cheating will be discouraged. participant to participant misbehaviour will lead to direct disqualification.</li>
            <li className={tab.p}>All the rights are reserved within the event organisers committee, incase of any disputes, the decision of judge will be final.</li>
            <li className={tab.p}>Event is scheduled as 4 sessions, each participant can participate in all 4 sessions with separate registrtations. repetitions of participation is also encouraged with individual registrations. </li>

          </ul>
          
        </div>

        <div
          className={toggleState === 3 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Akhil Prakash</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>akhil8765@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+919562381894" aria-hidden="true">+91 9562381894</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Amrutha Sunilraj</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>amruthasunilraj9@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+919567017417" aria-hidden="true">+91 9567017417</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Set13;