import { useState } from "react";
import Mainfooter from "../../Mainfooter/Mainfooter";
import Navbar from "../../Navbar/Navbar";
import tab from './Other.module.css';

function Other15() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Mini Militia</p>
       {/* <a href="https://rzp.io/l/I0mHzoRT" rel="noopener noreferrer" target='_blank' className={tab.regbutton}>register</a>  */}
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 1K</p>
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
          The apk file will be given at the spot.
        </p>
        <p className={tab.p}>Game starts with 6 noobies and first 3 rd will be selected to next game.</p>
        <p className={tab.p}>Usage of mod will lead to disqualification.</p>
         
         <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>05:00 PM</p>
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
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Aswin Aravind</li>
              <li className={tab.highspace}>Event head</li>
              
              <li className={tab.highspace}><a href="tel:+919745186215" aria-hidden="true">+91 9745186215</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Neeraj M R</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}><a href="tel:+918129390516" aria-hidden="true">+91 8129390516</a></li>
            </ul>
            
          </div>
          
        </div>
      </div>
    </div>
    <Mainfooter/>
  </>
  );
}

export default Other15;
