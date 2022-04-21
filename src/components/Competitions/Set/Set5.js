import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import tab from './Set.module.css';

function Set5() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Prison Break</p>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 1K</p>
        </div>
      </div>

      <a href="https://rzp.io/l/vOnYlRE7O0" rel="noopener noreferrer" target="_blank"  className={tab.regbutton}>register</a>

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
          A Puzzle Cracking Challenge where a series of puzzles will be provided to solve upon in order to break the prison by the use of some challenging clues.
          </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>10:00 AM</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>6 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>400</p>
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
            <li className={tab.p}>The team should not consist of more than 4 members. Students from different institutes can form a team.</li>
            <li className={tab.p}>Solve within the time limit given to each puzzle or else will be disqualified.</li>
            <li className={tab.p}>Never use mobile phones for solving except in any case if needed.</li>
            <li className={tab.p}>Unethical behaviour could lead to disqualification. Faculty-coordinators have all the rights to take final decisions for any matter during the event. </li>
            <li className={tab.p}>The decision of the judges will be final and abiding. Argument with judges in any form will lead to the disqualification of the team.</li>
            <li className={tab.p}>Each member of the team must contain the identity card.</li>
            <li className={tab.p}>Certificates of Participation will be given to all the teams that will participate in the event, but not to the teams which get disqualified due to disobeying any of the competition rules.</li>

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
              <li className={`${tab.highspace} ${tab.eventhead}`}>Anandhu M A</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>anilanandhu79@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+918714179301" aria-hidden="true">+91 8714179301</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Set5;