import React from 'react'
import './Mainfooter.css'
import Facebook from '../../components/Icons/Facebook'
import Twitter from '../../components/Icons/Twitter'
import Instagram from '../../components/Icons/Instagram'
import Youtube from '../../components/Icons/Youtube'
import map from '../../images/map1.svg'

function Mainfooter() {
  return (
    <div className='footerbg'>
        <div className="footercontainer">
            
         <div className='zealousfooter'>
           <h2>Zealous 5.0</h2>
          <div className='ftrdesc'>
           <p id="descri">Zealous 5.0, the annual technical fest of College of engineering cherthala, is an enthralling kaleidoscope of internally invigorating events. It has something in store for all and brings together renowned experts of various spheres of academic and the corporate industry.</p>
          </div>
          
          <div className="connect">
            <h3>Connect with us</h3>
            <div className='icon-container'>

            <div id='icon'><a id='fb'><Facebook/> </a></div>
            <div id='icon'><a id='tw'><Twitter/> </a></div>
            <div id='icon'><a id='In'><Instagram/> </a></div>
            <div id='icon'><a id='Yu' ><Youtube/> </a></div>
            </div>
          </div>
           </div>   
            <div className='getin'>
              {/* <p id='how'>How to reach us?</p>
              <img src={map} alt="" /> */}
              <div className='middle'>
               <div className='foo'>
              <a  id="mi">About us</a>
              <a id="mi">College website</a>
              <a id="mi">Games</a>
              <a id="mi">Fun Zone</a>
                 </div> 
                 <div className='foo'>
              <a  id="mi1">Featured events</a>
              <a id="mi1">Workshops</a>
              <a id="mi1">Departmental</a>
              
                 </div> 

              </div>
              
  {/* <p id='how'>Location</p>
              <img src={map} alt="" />  */}
            </div>
            <center>

            <div className='contactus' > <h2>Contact us</h2>
            <div className='contactcont'>

             <div className='staff'>

             <p id='name'>Anitha devadas</p> 
             <p id='post'>Staff coordinator</p>
              <p id='mobile'>number</p>
             </div>
             <div className='student'>
             <p id='name'>Akhil p jose</p> 
             <p id='post'>Coordinator</p>
              <p id='mobile'>number</p>
             </div>
            </div>
            </div>
            </center>
            </div> 
    </div>
  )
}

export default Mainfooter