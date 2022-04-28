import React from 'react'
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';
import Youtube from '../Icons/Youtube';
import './footer.css';
import map from '../../images/mp.png'
export default function Footer() {
  return (
    <div className='footercontainer'>
        
            <h2>Contact us</h2>
        
        <div className='contact'>
        <div>
            <h2>Content</h2>
        </div>
        <div className='socialcontainer' >
        <div className='map'>
        <a href="https://goo.gl/maps/fCfdv9FYaqtafjRe8" rel="noopener noreferrer" target="_blank" >
            <img src={map} alt="" />
        </a>
        </div>

    <div class="social">
        <div class="smedia">
            <div class="facebook">
<<<<<<< HEAD
                <a href={"https://www.facebook.com/ceczealous/"} rel="noopener noreferrer" target='_blank'  class="icon-link"><Facebook/></a>
=======
                <a href="https://www.facebook.com/ceczealous/" rel="noopener noreferrer" target="_blank" class="icon-link"><Facebook/></a>
>>>>>>> new_features
            </div>
        </div>
        <div class="smedia">
            <div class="instagram">
<<<<<<< HEAD
                <a href={"https://www.instagram.com/zealouscec/?hl=en"} rel="noopener noreferrer" target='_blank' class="icon-link"><Instagram/></a>
=======
                <a href="https://www.instagram.com/zealouscec/?hl=en" rel="noopener noreferrer" target="_blank" class="icon-link"><Instagram/></a>
>>>>>>> new_features
            </div>
        </div>
        <div class="smedia">
            <div class="youtube">
<<<<<<< HEAD
                <a href={"https://www.youtube.com/channel/UCjNm_V23UkeU3lzFT_fcTiA"} rel="noopener noreferrer" target='_blank' class="icon-link" ><Youtube/></a>
=======
                <a href="https://www.youtube.com/channel/UCjNm_V23UkeU3lzFT_fcTiA" rel="noopener noreferrer" target="_blank" class="icon-link" ><Youtube/></a>
>>>>>>> new_features
            </div>
        </div>    
        <div class="smedia">
            <div class="twitter">
<<<<<<< HEAD
                <a href={" https://twitter.com/ceczealous?t=NvzVgwvU1LgGiaGmr1TFQA&s=08"} rel="noopener noreferrer" target='_blank' class="icon-link"><Twitter/></a>
=======
                <a href=" https://twitter.com/ceczealous?t=NvzVgwvU1LgGiaGmr1TFQA&s=08" rel="noopener noreferrer" target="_blank" class="icon-link"><Twitter/></a>
>>>>>>> new_features
            </div>
        </div>        
        </div>
    </div>
        </div>
    </div>
  )
}
