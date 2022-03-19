import React,{useRef} from 'react'
import Aboutcss from './About.module.css'
import Carousel from 'react-elastic-carousel';
import Marquee from "react-fast-marquee"



function About() {
  



  return (
    <div className={Aboutcss.full}>
    <div className={Aboutcss.cardm}>
        <h2 className={Aboutcss.heading}><u>About</u></h2>
        <p className={Aboutcss.para}>Back from 2014,the College of Engineering Cherthala annually organizes TECHFEST with an aim to promote innovations of budding engineers to explore and exploit diverse talents in various spheres.ZEALOUS,the so called technical event,makes it almost like a modern-day Athens,the place of Athena herself.</p>
        <h2 ><u>Our Sponsors</u></h2> 
        <div className={Aboutcss.container}>
    {/* <input type="radio" name="dot" id="one" onClick={() => scroll(-20)}/>
    <input type="radio" name="dot" id="two" onClick={() => scroll(20)}/> */}

    <div className={Aboutcss.maincard}>
    
      <div className={Aboutcss.cards}>
        <Marquee
        speed={80} pauseOnHover={true} gradient={false} className={Aboutcss.marquee}>

        {/* <div className={Aboutcss.card}>
         <div className={Aboutcss.content}>
           <div className={Aboutcss.img}>
             <img src="images/apple.png" alt=""/>
           </div>
           <div className={Aboutcss.details}>
             <div className={Aboutcss.name}>Apple Inc</div>
             <div class={Aboutcss.job}> American multinational technology company</div>
           </div>
           <div class={Aboutcss.mediaicons}>
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
           
           </div>
         </div>
        </div> */}
        
        <div class={Aboutcss.card}>
         <div class={Aboutcss.content}>
           <div class={Aboutcss.img}>
             <img src="images/intel.png" alt=""/>
           </div>
           <div class={Aboutcss.details}>
             <div class={Aboutcss.name}>Intel Corp</div>
             <div class={Aboutcss.job}>Chinese designer and manufacturer of consumer electronics </div>
           </div>
           <div class={Aboutcss.mediaicons}>
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             
           </div>
         </div>
        </div>

        <div class={Aboutcss.card}>
         <div class={Aboutcss.content}>
           <div class={Aboutcss.img}>
             <img src="images/intel.png" alt=""/>
           </div>
           <div class={Aboutcss.details}>
             <div class={Aboutcss.name}>Intel Corp</div>
             <div class={Aboutcss.job}>Chinese designer and manufacturer of consumer electronics </div>
           </div>
           <div class={Aboutcss.mediaicons}>
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
           </div>
         </div>
        </div>
        <div class={Aboutcss.card}>
         <div class={Aboutcss.content}>
           <div class={Aboutcss.img}>
             <img src="images/intel.png" alt=""/>
           </div>
           <div class={Aboutcss.details}>
             <div class={Aboutcss.name}>Intel Corp</div>
             <div class={Aboutcss.job}>Chinese designer and manufacturer of consumer electronics </div>
           </div>
           <div class={Aboutcss.mediaicons}>
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
           </div>
         </div>
        </div>
        <div class={Aboutcss.card}>
         <div class={Aboutcss.content}>
           <div class={Aboutcss.img}>
             <img src="images/intel.png" alt=""/>
           </div>
           <div class={Aboutcss.details}>
             <div class={Aboutcss.name}>Intel Corp</div>
             <div class={Aboutcss.job}>Chinese designer and manufacturer of consumer electronics </div>
           </div>
           <div class={Aboutcss.mediaicons}>
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
           </div>
         </div>
        </div>
        
        </Marquee>
      </div>
      

  
      

    </div>
   
  </div>

  
  
  
  <h2><u>Our Committee</u></h2> 
  <div class={Aboutcss.container}>
  <div class={Aboutcss.row}>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src="https://picsum.photos/130/130?image=1027"/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Anjana</h3>
          <h4 class={Aboutcss.title}>Member</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"></a></li>
        
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src="https://picsum.photos/130/130?image=839"/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Ajith</h3>
          <h4 class={Aboutcss.title}>Web Developer</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src="https://picsum.photos/130/130?image=856"/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Akhil</h3>
          <h4 class={Aboutcss.title}>Web Developer</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class={Aboutcss.ourteam}>
        <div class={Aboutcss.picture}>
          <img class={Aboutcss.imgfluid} src="https://picsum.photos/130/130?image=836"/>
        </div>
        <div class={Aboutcss.teamcontent}>
          <h3 class={Aboutcss.name}>Amal</h3>
          <h4 class={Aboutcss.title}>Web Developer</h4>
        </div>
        <ul class={Aboutcss.social}>
          <li><a href="tel:+1234567" class="fa fa-phone" aria-hidden="true"></a></li>
          <li><a href="testmail@gmail.com" class="fa fa-envelope" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default About