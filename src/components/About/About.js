import React from 'react'
import Aboutcss from './About.module.css'
// import Carousel from 'react-elastic-carousel';
// import Marquee from "react-fast-marquee"
// import Slider from "react-slick"

import staff from '../../images/Staff.jpg';
import code from '../../images/Coordinator.jpg'
import prg1 from '../../images/program1.jpg'
import prg2 from '../../images/Program2.jpg'
import prg3 from '../../images/Program3.jpg'
import fin1 from '../../images/Finance1.jpg'
import fin2 from '../../images/Finance2.jpg'
import fin3 from '../../images/Finance2.jpg'
import med1 from '../../images/Media1.jpg'
import med2 from '../../images/media2.jpg'
import web from '../../images/web.jpg'
import tech1 from '../../images/Tech1.jpg'
import tech2 from '../../images/tech2.jpg'
import tech3 from '../../images/tech3.jpg'


function About() {
  



  return (
    <div className={Aboutcss.full} id='about'>
    <div className={Aboutcss.cardm}>
        <h2 className={Aboutcss.heading}>About</h2>
        <p className={Aboutcss.para}>Back from 2014, the College of Engineering Cherthala annually organizes TECHFEST with an aim to promote innovations of budding engineers to explore and exploit diverse talents in various spheres. ZEALOUS, the so called technical event, makes it almost like a modern-day Athens, the place of Athena herself.</p>
       
       

  
  
  
  <p className={Aboutcss.commite}>Our Committee</p> 
  <div class={Aboutcss.container}>
  <div class={Aboutcss.row}>
  {/* <Marquee
        speed={80} pauseOnHover={true} gradient={false} className={Aboutcss.marquee}> */}
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={staff} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Anitha devadas</h3>
          <h4 class={Aboutcss.title}>Staff coordinator</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={code} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Akhil p jose</h3>
          <h4 class={Aboutcss.title}>Coordinator</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={prg1} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Shafna sherin M V</h3>
          <h4 class={Aboutcss.title}>Program head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={prg2} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>vidhu venugopal</h3>
          <h4 class={Aboutcss.title}>Program head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={prg3} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Unnikrishnan R</h3>
          <h4 class={Aboutcss.title}>Program head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={fin1} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Sidharth sabu</h3>
          <h4 class={Aboutcss.title}>Finance head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={fin2} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Maria treesa joshna</h3>
          <h4 class={Aboutcss.title}>Finance head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={fin3} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Shahsadhi K S</h3>
          <h4 class={Aboutcss.title}>Finance head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={med1} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Muralikrishnan N</h3>
          <h4 class={Aboutcss.title}>Media head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={med2} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Aswin krishna k</h3>
          <h4 class={Aboutcss.title}>Meadia head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={web} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Ajith shine</h3>
          <h4 class={Aboutcss.title}>Web head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+919037955382" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="ajithshine77@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={tech1} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Devaraj P V </h3>
          <h4 class={Aboutcss.title}>Technical head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={tech2} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Anandhu prasad T</h3>
          <h4 class={Aboutcss.title}>Technical head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src={tech3} alt='profile'/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Anandhu M A </h3>
          <h4 class={Aboutcss.title}>Technical head</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"><div></div></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"><div></div></a></li>
        </ul>
      </div>
    </div>
    {/* </Marquee> */}
  </div>
</div>
    </div>
    </div>
  )
}

export default About