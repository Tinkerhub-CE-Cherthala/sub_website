import React from "react";
import {Link} from 'react-router-dom'
import header from './images/header-img.png'
import img1 from './images/img1.jpg'
import './List.css'

function List(){
    return(
        <div>

<section class="event" id="event">

<div class="heading align-items-center">
    <h1>EVENTS</h1>
    <img src={header} alt="header" width="500px" />
</div>
<div class="contact-link">
    <a href="http://127.0.0.1:5500/front/src/contact/index.html">CONTACT</a>
</div>

<div class="box-container">

    <div class="box">
        <img src={img1} alt=""/>
        <div class="info">
            <h3>EVENT1</h3>
            <p>DETAILS</p>
            <a class="btn">Register</a>
        </div>
    </div>

    <div class="box">
        <img src="" alt=""/>
        <div class="info">
            <h3>EVENT2</h3>
            <p>details</p>
            <a href="http://127.0.0.1:5500/front/src/form/index.html" class="btn">REGISTER</a>
        </div>
    </div>

    <div class="box">
        <img src="images/img3.jpg" alt=""/>
        <div class="info">
            <h3>EVENT3</h3>
            <p>details</p>
            <a href="http://127.0.0.1:5500/front/src/form/index.html" class="btn">REGISTER</a>
        </div>
    </div>

    
    <div class="box">
        <img src="images/img4.jpg" alt=""/>
        <div class="info">
            <h3>EVENT4</h3>
            <p>details</p>
            <a href="http://127.0.0.1:5500/front/src/form/index.html" class="btn">REGISTER</a>
        </div>
    </div>

    <div class="box">
        <img src="images/img5.jpg" alt=""/>
        <div class="info">
            <h3>EVENT5</h3>
            <p>details</p>
            <a href="http://127.0.0.1:5500/front/src/form/index.html" class="btn">REGISTER</a>
        </div>
    </div>
    <div class="box">
        <img src="images/img6.jpg" alt=""/>
        <div class="info">
            <h3>EVENT6</h3>
            <p>details</p>
            <a href="http://127.0.0.1:5500/front/src/form/index.html" class="btn">REGISTER</a>
        </div>
    </div>

</div>

</section>
  
</div>        
    )
}
export default List;