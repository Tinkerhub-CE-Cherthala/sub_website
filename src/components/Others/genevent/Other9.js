import { useState } from "react";
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
         
        
        </div>


        <div
          className={toggleState === 2 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Anuvind Shaj</li>
              <li className={tab.highspace}>Event head</li>
              
              <li className={tab.highspace}><a href="tel:+919037804284" aria-hidden="true">+91 9037804284</a></li>
            </ul>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Amrutha Sunilraj</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}><a href="tel:+919567017417" aria-hidden="true">+91 9567017417</a></li>
            </ul>
            
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
}

export default Other9;