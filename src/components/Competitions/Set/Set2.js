import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import tab from './Set.module.css';

function Set2() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Turn a' round Z3.0</p>
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
          A Transformer Winder Test where the participants will be asked to do the perfect winding by knowing the number of primary turns as well as calculating the number of secondary turns with a unique winding style in the given time.           </p>
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
            <li className={tab.p}>Audience shall not give hints or clues to the competitors.</li>
            <li className={tab.p}>The decision of judges will be final and will not be subjected to any change.</li>
            <li className={tab.p}>Participants shall not use mobile phones or any other electronic equipment. </li>
            <li className={tab.p}>Participants should complete the task in the given time.</li>
            <li className={tab.p}>All contestants are required to present a student identification card.</li>
            <li className={tab.p}>The participants will be observed throughout the contest and any problems or violations of the rules in case will be reported.</li>

          </ul>
          
        </div>

        <div
          className={toggleState === 3 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Thasleema Nazar</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>thasleemanazar867@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+917994162491" aria-hidden="true">+91 7994162491</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Revathy Chandran </li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>revathychandran16@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+919188602641" aria-hidden="true">+91 9188602641</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Set2;