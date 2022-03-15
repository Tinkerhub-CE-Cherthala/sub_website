import React from 'react'
import './footer.css';

export default function Footer() {
  return (
    <div class="social">
        <div class="smedia">
            <div class="facebook">
                <a href="https://www.facebook.com/ceczealous/" class="icon-link"><i class="fab fa-facebook"></i></a>
            </div>
        </div>
        <div class="smedia">
            <div class="instagram">
                <a href="https://www.instagram.com/zealouscec/?hl=en" class="icon-link"><i class="fab fa-instagram" id="insta"></i></a>
            </div>
        </div>
        <div class="smedia">
            <div class="youtube">
                <a href="https://www.youtube.com/channel/UCjNm_V23UkeU3lzFT_fcTiA" class="icon-link" ><i class="fab fa-youtube" id="yout"></i></a>
            </div>
        </div>    
        <div class="smedia">
            <div class="twitter">
                <a href="https://twitter.com/zealouscec" class="icon-link"><i class="fab fa-twitter"></i></a>
            </div>
        </div>        
    </div>
  )
}
