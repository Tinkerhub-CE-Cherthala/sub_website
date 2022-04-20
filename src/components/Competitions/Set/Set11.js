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
      <p className={tab.eventname}>Mindspark</p>
      <a href="https://rzp.io/l/TScCTTEKn" className={tab.regbutton}>register</a>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 6.5K</p>
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
          A Circuit Debugging Contest for rectifying the fault circuit by analysing the given exact output within the time limit.         </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>11:00 AM</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>6 May</p>
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
              <li className={`${tab.highspace} ${tab.eventhead}`}>Aliya T I</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>aliyaibrahim17@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+919946518347" aria-hidden="true">+91 9946518347</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Nandakumar P V</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>nandakumarnandu101@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+918593951168" aria-hidden="true">+91 8593951168</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Set11;