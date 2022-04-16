import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import tab from './Set.module.css';

function Set1() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
      <Navbar />
    <div className={tab.container}>
      <p className={tab.eventname}>RACEZILLA Z3.0</p>
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
          In this competition the contestant or team of contestants design a wireless robot within the specified dimensions that can operate manually. The robot that will complete the specified task in least time will be the winner. 
          </p>
          <div className={tab.highlights}>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Time, Date</p>
              <p>3:00 pm, 4 May</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Entry fee</p>
              <p>500</p>
            </div>
            <div className={tab.highlightdiv}>
              <p className={tab.highlightheading}>Prize pool</p>
              <p>16K</p>
            </div>
          </div>
          <p className={tab.rules}>Robot Specifications</p>
          <ul>
            <li className={tab.p}>The maximum dimension of the robot can be 30 cm x 30 cm x 30 cm (l x b x h). </li>
            <li className={tab.p}>The robot must be wireless.</li>
            <li className={tab.p}>AC supply will be provided in the college.</li>
            <li className={tab.p}>Maximum weight must not exceed 3 kg.</li>
            <li className={tab.p}>The machine must be powered electrically only. Use of IC engines is not allowed.</li>
            <li className={tab.p}>Batteries must be sealed, immobilised electrolyte type (gel cell, lithium, NiCad, or dry cells).</li>
            <li className={tab.p}>The electric voltage anywhere in the machine should not be more than 12 V DC at any point of time.</li>
          </ul>
          <p className={tab.rules}>Track Specification</p>
          <ul>
            <li className={tab.p}>The track surface and course line may have unevenness. </li>
            <li className={tab.p}>There will be certain obstacles in the race track which will try to slow down the robot.</li>
            <li className={tab.p}>Arena will consists of switch bridge, speed breakers, marble pit, slippery path (by grease), rotating disc,curve ramp down, seesaw etc. </li>
          </ul>
        </div>

        <div
          className={toggleState === 2 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <p className={tab.rules}>
          General Rules
          </p>
          <ul>
            <li className={tab.p}>The team should not consist of more than 4 members. Students from different institutes can form a team.</li>
            <li className={tab.p}>Unethical behaviour could lead to disqualification. Faculty-coordinators have all the rights to take final decisions for any matter during the event. </li>
            <li className={tab.p}>The decision of the judges will be final and abiding. Argument with judges in any form will lead to the disqualification of the team.</li>
            <li className={tab.p}>Robot should be as per the given specifications.</li>
            <li className={tab.p}>Each member of the team must contain the identity card.</li>
            <li className={tab.p}>The robot should not damage the arena.</li>
            <li className={tab.p}>No test practice will be allowed on the arena. </li>
            <li className={tab.p}>The robot must not leave behind any of its parts during the run; else it will result in  disqualification. </li>
            <li className={tab.p}>Final decision will be taken by the judging panel </li>
            <li className={tab.p}>Event will only occur only if the number of participants is 10 or more </li>
            <li className={tab.p}>Certificates of Participation will be given to all the teams that will participate in the event, but not to the teams which get disqualified due to disobeying any of the competition rules.</li>

          </ul>

          <p className={tab.rules}>Game Rule</p>
          <ul>
            <li className={tab.p}>The competition is based on a time trail system. There will be a qualifying round for each team. </li>
            <li className={tab.p}>The top 5 teams from the qualifying round make it to the final round on the basis of time trials.</li>
            <li className={tab.p}>If any of the robots starts off before the start up call, the counter would be restarted and the machines will get a second chance. If repeated again then team will be disqualified. </li>
            <li className={tab.p}>If the Robot crosses a checkpoint, and moves off track, then the Robot would be placed back on the previous checkpoint crossed with a penalty.</li>
            <li className={tab.p}>If the robot by any chances falls from the bridge, the robot will be kept back to the previous checkpoint crossed with a penalty.</li>
            <li className={tab.p}>Your robot must be ready when a call is made for your team.</li>
            <li className={tab.p}>Team members will be allowed only three times to touch or reset their robots position during the run. However, this will lead to a time penalty and the timer will not stop during this course of action.</li>
            <li className={tab.p}>The robot will be judged on basis of (in priority): 
              <ol className={tab.ool}>
                <li className={tab.p}>Time to complete the track.</li>
                <li className={tab.p}>Number of checkpoints cleared.</li>
              </ol>
            </li>
            <li className={tab.p}>Machine must not contain any pneumatic & hydraulic systems, IC engines.</li>
            <li className={tab.p}>Decision about your robot will be taken by the organisers. </li>
            <li className={tab.p}>No team will get a second chance after completing the track with a poor score.</li>
            <li className={tab.p}>The structure of the robot should not be changed during the competition.</li>
          </ul>
          
        </div>

        <div
          className={toggleState === 3 ? `${tab.content}  ${tab.activecontent}` : tab.content}
          >
          <div className={tab.highcontacts}>
            <ul className={tab.highbox}>
              <li className={`${tab.highspace} ${tab.eventhead}`}>Ajmal Jaleel</li>
              <li className={tab.highspace}>Event head</li>
              <li className={tab.highspace}>ajmaljaleel5@gmail.com </li>
              <li className={tab.highspace}><a href="tel:+919846065265" aria-hidden="true">+91 9846065265</a></li>
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
  </>
  );
}

export default Set1;