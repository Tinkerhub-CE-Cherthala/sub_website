import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import tab from './Set.module.css';

function Set6() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Credorian</p>
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
          A 24 Hour Hackathon to test the knowledge  on reading & understanding a perplexed piece of code.
          
          </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time,Date</p>
              <p>4 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>150</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Prize pool</p>
              <p>10K</p>
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
            <li className={tab.p}>Teams will be a maximum of 5 people</li>
            <li className={tab.p}>Teams should be made up exclusively of students or anyone who are not organizers, volunteers, judges, sponsors, or in any other privileged position at the event.</li>
            <li className={tab.p}>All team members should be present at the event. </li>
            <li className={tab.p}>All work on a project should be done during the hackathon. </li>
            <li className={tab.p}>Teams can work on ideas that have already been done. Hacks do not have to be “innovative”. If somebody wants to work on a common idea they should be allowed to do so and should be judged on the quality of their hack.</li>
            <li className={tab.p}>Teams can work on an idea that they have worked on before (as long as they do not re-use code).</li>
            <li className={tab.p}>The entire idea need not be fully implemented however, the submission should be functional so that it can be reviewed by the judges.</li>
            <li className={tab.p}>Teams can be disqualified from the competition at the organizers’ discretion. Reasons might include but are not limited to breaking the Competition Rules, breaking the Code of Conduct, or other unsporting behaviour.</li>
            

          </ul>
          
        </div>

        <div
          className={toggleState === 3 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Jasnamol M J </li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>jasnamoljacob2000@gmail.com  </li>
              <li className={tab.highspace}><a href="tel:+919895816705" aria-hidden="true">+91 9895816705</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Biya Mathew</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>biyamathew123@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+919447973943" aria-hidden="true">+91 9447973943</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Set6;