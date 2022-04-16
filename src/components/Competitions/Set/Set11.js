import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import tab from './Set.module.css';

function Set11() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Short circuit Z3.0</p>
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
          Mindspark event is based on circuit debugging. Main aim is to correct the fault
circuit by analysing the given output. A fault circuit and the exact output of the
specific circuit is given. We are providing same circuit for all participants at a
time. Also provide a time limit for the completion and based on that allotted time,
we’ll choose the winners. This is a wonderful opportunity for the participants to
increase their knowledge in circuits and it implementation.         </p>
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
            <li className={tab.p}>Only individuals will be allowed to compete.</li>
            <li className={tab.p}>Components , paper , and pen are provided.</li>
            <li className={tab.p}>Every participant should have their college ID card or atleast one proof of identity.</li>
            <li className={tab.p}> Spot Registration is possible.</li>
            <li className={tab.p}> Those who generate the desired circuit with minimum time will be the winners.</li>
            <li className={tab.p}>Prize money is awarded to students only if they generate 100% of the desired output.</li>
            <li className={tab.p}> Participants must be present for the event at the specified time. Absent or late
 participants will be disqualified. No money will be returned for any reason.</li>
            <li className={tab.p}> Any kind of cheating will be discouraged. Any participants found doing so will
 lead to direct elimination.</li>
            <li className={tab.p}>Any misbehaviour from the participant with other participant or with organizer
 won’t be encouraged. It’ll lead to direct disqualification.</li>
            <li className={tab.p}> In case of any disputes, final wording will remain with the organizers. Decision
 of the judge is final.</li>
            <li className={tab.p}>Use of mobile phones are not allowed during competition. </li>
            <li className={tab.p}>All the rights are reserved with Event Organizer Committee.</li>
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

export default Set11;