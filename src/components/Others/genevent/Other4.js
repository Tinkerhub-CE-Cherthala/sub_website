import { useState } from "react";
import Mainfooter from "../../Mainfooter/Mainfooter";
import Navbar from "../../Navbar/Navbar";
import tab from './Other.module.css';

function Other4() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>TECH TODAY</p>
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 3.5K</p>
        </div>
      </div>
      {/* <a href="https://rzp.io/l/TScCTTEKn" className={tab.regbutton}>register</a> */}
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
          An extempore technical talk contest.           </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>01:30 PM</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>6,7 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>15</p>
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
            <li className={tab.p}>Topics will be chosen accordingly at that moment.</li>
            <li className={tab.p}>Candidates can surf the internet for 5 minutes & further surfing
will not be entertained.</li>
            <li className={tab.p}>Should present the talk for 2 minutes.</li>
            <li className={tab.p}>Best speech will be rewarded. </li>
            <li className={tab.p}>Medium of Language is English.</li>
            <li className={tab.p}>Enter the venue at least 15 minutes before the scheduled time in
order to reduce the last minute rush.</li>
            <li className={tab.p}>Any infringements of these instructions shall entail the
cancellation of participation of that individual.</li>
            <li className={tab.p}>Wearing of mask/face cover is mandatory for all candidates.
Candidates without mask/face cover will not be allowed entry into
the event.</li>
            <li className={tab.p}>Candidates may carry his/her own hand sanitizer (small size) in
transparent bottle.</li>
            <li className={tab.p}>Candidates to follow COVID 19 norms of ‘social distancing’ in
and around the premises of the venue.</li>
            

          </ul>
          
        </div>

        <div
          className={toggleState === 3 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Vinduja V Nair </li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>vindujanair04@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+919072005491" aria-hidden="true">+91 9072005491</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Aneena Francis</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>aneenafrancis143@gmail.com</li>
              <li className={tab.highspace}><a href="tel:+917561048983" aria-hidden="true">+91 7561048983</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    <Mainfooter/>
  </>
  );
}

export default Other4;