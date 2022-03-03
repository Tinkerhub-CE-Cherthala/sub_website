import React from 'react';
import Contactcss from './Contact.module.css';

function map(){
    return(
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.265952039256!2d76.36178251431056!3d9.743525080072184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0879620b16c7e1%3A0x8858edaeedfc5220!2sCollege%20of%20Engineering%20Cherthala!5e0!3m2!1sen!2sin!4v1640874561700!5m2!1sen!2sin" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    )
}

export default function Contact() {
    return (
        <section class={Contactcss.contact}>
        <div class={Contactcss.content}>
            <h2>Contact Us</h2>
        </div>
        <div class={Contactcss.container}>
            <div class={Contactcss.contactinfo}>
                <div class={Contactcss.phonere} onclick="window.open('tel:+917306795119');">
                     <div class={Contactcss.box}>
                         <div class={Contactcss.icon}><i class="fas fa-phone"></i></div>
                     </div>
                     <div class={Contactcss.text}>
                        <a href="tel:+917306795119" class={Contactcss.contact}>+91 7306795119</a>
                     </div>
                </div>
                <div class={Contactcss.mailre} onclick="window.open('mailto:jayakrishnans2041@gmail.com');">
                    <div class={Contactcss.box}>
                        <div class={Contactcss.icon}><i class="fas fa-envelope"></i></div>
                    </div>
                    <div class={Contactcss.text}>
                        <a href="mailto:jayakrishnans2041@gmail.com" class={Contactcss.mail-data}>jayakrishnans2041@gmail.com</a>
                    </div>
                </div>
                <div class={Contactcss.box}>
                    <div class={Contactcss.icon}>
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class={Contactcss.marker} src={map()}>
                       
                    </div>
                </div>
                <div class={Contactcss.smedia}>
                    <div class={Contactcss.smedia}>
                        <div class={Contactcss.facebook}>
                            <a href="https://www.facebook.com/ceczealous/" class={Contactcss.icon-link}><i class="fab fa-facebook"></i></a>
                        </div>
                    </div>
                    <div class={Contactcss.smedia}>
                        <div class={Contactcss.instagram}>
                            <a href="https://www.instagram.com/zealouscec/?hl=en" class={Contactcss.icon-link}><i class="fab fa-instagram" id="insta"></i></a>
                        </div>
                    </div>
                    <div class={Contactcss.smedia}>
                        <div class={Contactcss.youtube}>
                            <a href="https://www.youtube.com/channel/UCjNm_V23UkeU3lzFT_fcTiA" class={Contactcss.icon-link}><i class="fab fa-youtube" id="yout"></i></a>
                        </div>
                    </div>    
                    <div class={Contactcss.smedia}>
                        <div class={Contactcss.twitter}>
                            <a href="https://twitter.com/zealouscec" class={Contactcss.icon-link}><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>        
                </div>
            </div>
            <div class={Contactcss.contactform}>
                <h2>Send Message</h2>
                <form action="" method="post">
                    <div class={Contactcss.inputbox}>
                        <input type="text" name="" required="required" />
                        <span>Full Name</span>
                    </div>
                    <div class={Contactcss.inputbox}>
                        <input type="text" name="" required="required" />
                        <span>Phone Number</span>
                    </div>
                    <div class={Contactcss.inputbox}>
                        <input type="email" name="" required="required" />
                        <span>Email</span>
                    </div>
                    <div class={Contactcss.inputbox}>
                        <textarea required="required"></textarea>
                        <span>Type your Message</span>                        
                    </div>
                    <div class={Contactcss.inputbox} >
                        <button type="submit">Send</button>
                    </div>
                </form> 
            </div>
            </div>
    </section>
    )
}
