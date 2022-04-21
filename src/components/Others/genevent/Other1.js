import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import tab from './Other.module.css';

function Other1() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Mjolnir</p>
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
          An Arm - Lifting Grip Challenge in which the participant will have to hold the handle of the hammer unless & until the jury gives the down command.          </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>09:00 AM</p>
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
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Shuhaib</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>shuhaibshaike@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+918281797758" aria-hidden="true">+91 8281797758</a></li>
            </ul>
            
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Other1;