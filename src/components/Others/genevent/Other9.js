import { useState } from "react";
import Mainfooter from "../../Mainfooter/Mainfooter";
import Navbar from "../../Navbar/Navbar";
import tab from './Other.module.css';

function Other9() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Star of zealous</p>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 3K</p>
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
          A star on the walk of fame is something to dream!
We don’t have a Walk of Fame.
But what we do have is a platform for all you lot to have a chance to be a star, etch yourself into
history.
Zealous 5.0 is proud to present .
#Star_Of_Zealous
.
Overcome your obstacles and have a chance to be a star and win a prize money of 3K and get
a chance to have a free go at the adventure courses!!
.
Clear your calenders boys and girls!
And be there at 6th & 7th of May at College Of Engineering Cherthala.         </p>

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
          <p className={tab.rules}>
            Rules
          </p>
          <ul>
            <li className={tab.p}>individual participation only.</li>
            <li className={tab.p}>Only registered participants are allowed to participate.</li>
            <li className={tab.p}>Spot registration is possible. </li>
            <li className={tab.p}>Event consist of four rounds.</li>
            <li className={tab.p}>Individuals will be eliminated on each round based on their performance.</li>
            <li className={tab.p}>Winner and runnerup will be selected among the finalists.</li>
            <li className={tab.p}>Participants should listen the instructions given by the announcers. </li>
            <li className={tab.p}>Any misbehaviours will lead to direct disqualification of the contestants.</li>
            <li className={tab.p}>If one or more participants become the winners, then prize money will be shared among them.</li>
            <li className={tab.p}>Absent or late participants will be disqualified without returning the registration fee.</li>
            <li className={tab.p}>All the rights are reserved within the event organisation committee, In case of any disputes, the decision of judges will be final.</li>
          </ul>
          
        </div>


        <div
          className={toggleState === 2 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Anuvind Shaji</li>
              <li className={tab.highspace}>Event head</li>
              
              <li className={tab.highspace}><a href="tel:+919037804284" aria-hidden="true">+91 9037804284</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Gayathri Belraj</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}><a href="tel:+918078873930" aria-hidden="true">+91 8078873930</a></li>
            </ul>
            
          </div>
          
        </div>
      </div>
    </div>
    <Mainfooter/>
  </>
  );
}

export default Other9;