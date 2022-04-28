import React from 'react'
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';
import Youtube from '../Icons/Youtube';
import './footer.css';

export default function Footer() {
  return (
    <div class="social">
        <div class="smedia">
            <div class="facebook">
                <a href={"https://www.facebook.com/ceczealous/"} rel="noopener noreferrer" target='_blank'  class="icon-link"><Facebook/></a>
            </div>
        </div>
        <div class="smedia">
            <div class="instagram">
                <a href={"https://www.instagram.com/zealouscec/?hl=en"} rel="noopener noreferrer" target='_blank' class="icon-link"><Instagram/></a>
            </div>
        </div>
        <div class="smedia">
            <div class="youtube">
                <a href={"https://www.youtube.com/channel/UCjNm_V23UkeU3lzFT_fcTiA"} rel="noopener noreferrer" target='_blank' class="icon-link" ><Youtube/></a>
            </div>
        </div>    
        <div class="smedia">
            <div class="twitter">
                <a href={" https://twitter.com/ceczealous?t=NvzVgwvU1LgGiaGmr1TFQA&s=08"} rel="noopener noreferrer" target='_blank' class="icon-link"><Twitter/></a>
            </div>
        </div>        
    </div>
  )
}
