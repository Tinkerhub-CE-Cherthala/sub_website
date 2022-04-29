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


          
          <div className='date' >
            <p id='d1'>Date: May 6th & 7th</p>
            <p id='d2'>Venue: College Of Engineering Cherthala <span id='mp'>
              
          <div className='mapimg'>
          <a href='https://goo.gl/maps/w9vaLNeW658fpAiN9' rel="noopener noreferrer" target="_blank" >
              <img src={map} alt="map" /> 
          </a>
          </div>
              </span> </p>
          </div>
        
          
          {/* <div className="connect">
            <h3>Connect with us</h3>
            <div className='icon-container'>

            <div id='icon'><a id='fb'><Facebook/> </a></div>
            <div id='icon'><a id='tw'><Twitter/> </a></div>
            <div id='icon'><a id='In'><Instagram/> </a></div>
            <div id='icon'><a id='Yu' ><Youtube/> </a></div>
            </div>
          </div> */}
           </div>   



            {/* <div className='getin'>
              
              <div className='middle'>
               <div className='foo'>
              <a  id="mi" href='#'>About us</a>
              <a id="mi" href='#'>College website</a>
              <a id="mi" href='#'>Games</a>
              <a id="mi" href='#'>Fun Zone</a>
                 </div> 
                 <div className='foo'>
              <a  id="mi1" href='#'>Featured events</a>
              <a id="mi1" href='#'>Workshops</a>
              <a id="mi1" href='#'>Departmental</a>
              
                 </div> 

              </div> */}
              
  {/* <p id='how'>Location</p>
              <img src={map} alt="" />  */}
            {/* </div> */}
            



            <div className='contactus' > <h2>Contact us</h2>
            <div className='contactcont'>

             <div className='staff'>

             <p id='name'>Anitha devadas</p> 
             <p id='post'>Staff coordinator</p>
              <p id='mobile'><a href='tel: +919995215540' rel="noopener noreferrer" target="_blank" >+919995215540</a></p>
             </div>
             <div className='student'>
             <p id='name'>Akhil p jose</p> 
             <p id='post'>Coordinator</p>
              <p id='mobile'><a href="tel:+918921399233" rel="noopener noreferrer" target="_blank" >+918921399233</a></p>
             </div>
            </div>
            <div className="connect">
            <h3>Connect with us</h3>
            <div className='icon-container'>

            <div id='icon'><a id='fb' href="https://www.facebook.com/ceczealous/" rel="noopener noreferrer" target="_blank"><Facebook/> </a></div>
            <div id='icon'><a id='tw' href=" https://twitter.com/ceczealous?t=NvzVgwvU1LgGiaGmr1TFQA&s=08" rel="noopener noreferrer" target="_blank" class="icon-link"><Twitter/> </a></div>
            <div id='icon'><a id='In' href="https://www.instagram.com/zealouscec/?hl=en" rel="noopener noreferrer" target="_blank" class="icon-link"><Instagram/> </a></div>
            <div id='icon'><a id='Yu' href="https://www.youtube.com/channel/UCjNm_V23UkeU3lzFT_fcTiA" rel="noopener noreferrer" target="_blank" ><Youtube/> </a></div>
            </div>
          </div>
            </div>
      
            </div> 
    </div>
  )
}

export default Mainfooter