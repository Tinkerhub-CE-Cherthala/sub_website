import { useState } from "react";
import Mainfooter from "../../Mainfooter/Mainfooter";
import Navbar from "../../Navbar/Navbar";
import tab from './Set.module.css';

function Set10() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>ZEA-MAD</p>
      {/* <a href="https://rzp.io/l/PsZ32vvd" rel="noopener noreferrer" target='_blank' className={tab.regbutton}>register</a> */}
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 5K</p>
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
          A Mobile Application Development Contest where the students would focus on developing technical & social (teamwork) skills.        </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>06:00 PM</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>6,7 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>150</p>
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
            <li className={tab.p}>The competition is open for everyone who is learning android technologies or anyone who is going to start.</li>
            <li className={tab.p}>Can participate in a group of up to three people.</li>
            <li className={tab.p}>Teams should be made up exclusively of students or anyone who are not
organizers, volunteers, judges, sponsors, or in any other privileged position at the
event.</li>
            <li className={tab.p}>All team members should be present at the event. </li>
            <li className={tab.p}>The entire app need not be fully implemented however, the submission should be
functional so that it can be reviewed by the judges.</li>
            <li className={tab.p}>Teams can be disqualified from the competition at the organizer’s discretion.
Reasons might include but are not limited to breaking the Competition Rules,
breaking the Code of Conduct, or other unspporting behaviour.</li>
            <li className={tab.p}>Participants will have to bring their own system with Android studio installed in it.</li>

          </ul>
          
        </div>

        <div
          className={toggleState === 3 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Rini V Rajan</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>rinivrajan2000@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+917560845140" aria-hidden="true">+91 7560845140</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Lekshmi S Anil</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>lekshmisanil2k@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+919207476385" aria-hidden="true">+91 9207476385</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    <Mainfooter/>
  </>
  );
}

export default Set10;