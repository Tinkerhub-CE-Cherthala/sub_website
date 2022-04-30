import { useState } from "react";
import Mainfooter from "../../Mainfooter/Mainfooter";
import Navbar from "../../Navbar/Navbar";
import tab from './Other.module.css';

function Other7() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>Fotograpia</p>
      <a href="https://forms.gle/EvCkBshMXxkxJ2j26" rel="noopener noreferrer" target='_blank' className={tab.regbutton}>register</a>

      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 2K</p>
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
          Introducing, ZEALOUS SPOT PHOTOGRAPHY Contest. Unveil the zeal, display your skills,
frame the right moments and win exciting prizes.
Click it anyway you like, camera or phone, of anything keeping in mind the theme -HAPPINESS.  
         </p>
         
        <p className={tab.rules}>
        Judging criteria
        </p>
        <p className={tab.p}>Photos clicked during Zealous 5.0 only be evaluated for competition.</p>
        <p className={tab.p}>Adherence to Them. </p>
        <p className={tab.p}>Adherence to Rules and Regulations.</p>
        <p className={tab.p}>Uniqueness of Concept.</p>
        <p className={tab.p}>Originality , Creativity , Overall Artistic Impression , Color, Lighting, Exposure and Focus </p>

        

          {/* <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Date</p>
              <p>4 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>20</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time</p>
              <p>2k</p>
            </div>
          </div> */}
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
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Gayathri Belraj</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>gayathribelraj20@gmail.com </li>
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

export default Other7;