import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import tab from './Set.module.css';

function Set7() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>PERSONA</p>
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
          A Project Presentation Contest that encourages students to showcase their development & innovative skills. 
            </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time,Date</p>
              <p>4 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>300</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Prize pool</p>
              <p>8K</p>
            </div>
          </div>
          <p className={tab.rules}>
              Round 1
          </p>
          <li className={tab.p}>Registration and Submission of your Abstract .</li>
          <ul>
              <li className={tab.p}>The participants need to submit their Abstract of the project at  the time of registration. </li>
              <li className={tab.p}>The abstract should contain, idea, requirements, functionality and details about the expected output.</li>
              <li className={tab.p}>These abstracts will be judged and the best ideas will be selected for the Second round.</li>
          </ul>
          <p className={tab.rules}>
              Round 2
          </p>
          <li className={tab.p}>Final Registration and Presentation of  PPT for selected participants.</li>
          <ul>
              <li className={tab.p}>The second round will be conducted only for the selected participants.The selected participants should submit their PPT  before 9 Am on the day of  event.</li>
          </ul>
          <li className={tab.p}>The  selected participants have to remmit the registration fee  during  the time of  final registration.</li>
        </div>

        <div
          className={toggleState === 2 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <p className={tab.rules}>
            Rules
          </p>
          <ul>
            <li className={tab.p}>The competition is open for students from any branches.</li>
            <li className={tab.p}>Can participate individually or in a group of up to 4 people.</li>
            <li className={tab.p}> All team members should be present at the time of event.</li>
            <li className={tab.p}>The project must be socially relevant.  </li>
            <li className={tab.p}>The entire project need not be fully implemented; however, there must be a clear idea
about the project and its implementation(The detailed idea and design of the project
need to be presented)</li>
            <li className={tab.p}>Teams should be made up exclusively of students or anyone who are not organizers,
volunteers, judges, sponsors, or in any other privileged position at the event.</li>
            <li className={tab.p}>Presentations are limited to 15 minutes maximum and competitors exceeding the time
limit are disqualified.</li>
            <li className={tab.p}>The decision of the adjudicating panel is final.</li>
            

          </ul>
          
        </div>

        <div
          className={toggleState === 3 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Gopika C Laiju</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>gopikaclaiju@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+917558932590" aria-hidden="true">+91 7558932590</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Megha Manoj</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>meghamanojm2000@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+919995322800" aria-hidden="true">+91 9995322800</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Set7;