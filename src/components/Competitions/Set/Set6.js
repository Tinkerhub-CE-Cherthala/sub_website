import { useState } from "react";
import Mainfooter from "../../Mainfooter/Mainfooter";
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
      {/* <a href="https://rzp.io/l/7RtNMx3R" rel="noopener noreferrer" target="_blank" className={tab.regbutton}>register</a> */}
      <div className={tab.toplights}>
        <div className={tab.toplightdiv}>
          
        </div>
        <div className={tab.toplightdiv}>
          <p className={tab.toplightheading}>Prize pool: 10K</p>
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
          Zealous 2022  In collaboration with Bytestrone presents you with the opportunity to go all-guns-blazing with your coding repertoire. If you have what it takes to be called a Credorian, come be a part of this amazing event, one which will bring out the programmer in you, in ways that you have not even imagined.          
          </p>
          <p className={tab.p}>
          Credorian is an event to show up your coding skills!! 
Can you be in a 24 Hour marathon of building, creating, producing, delivering and pitching? Then, don't miss out on this glorious opportunity to showcase your brilliant skills.What’s more? A career and internship opportunity with Bytestrone!!!
          </p>
          <p className={tab.p}>
          Selected participants will be getting direct interview from Bytestrone  and placed students  will be getting a package of 4 lakhs per annum. For participants who are given an internship offer, they will be paid a fixed monthly stipend of Rs. 8000.
          </p>
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
              <p>300</p>
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
            <li className={tab.p}>Teams will be a maximum of 2-4 people</li>
            <li className={tab.p}>Bytestrone will provide a git repository for each team, all the generated artifacts will have to be uploaded to the git repository. </li>
            <li className={tab.p}>Hackathon Starts at 9:30AM  6th May 2022. </li>
            <li className={tab.p}>All team members should be present at the event.  </li>
            <li className={tab.p}>All work on a project should be done during the hackathon. </li>
            <li className={tab.p}>Participants will have to bring their own system.</li>
            <li className={tab.p}>Teams can decide on the tools and technologies that they wish to use to implement the solution.</li>
            <li className={tab.p}>Internet Connectivity will be provided. </li>
            <li className={tab.p}>Each submission will be evaluated by Bytestrone and assigned representatives from college. </li>
            <li className={tab.p}>Bysterone will provide trainee offer letters to each participants who clears the evaluation process. </li>
            <li className={tab.p}>Teams can be disqualified from the competition at the organizers’ discretion. </li>
            

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
    <Mainfooter/>
  </>
  );
}

export default Set6;