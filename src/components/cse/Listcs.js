import React from "react";
import './Listcs.css'

function Listcs(){
    return(
        <>
           <section className="event" id="event">

<div className="heading align-items-center">
    <h1>EVENTS</h1>
    <img src="images/header-img.png" alt="" width="500px" />
</div>
<div className="contact-link">
    <a href="http://127.0.0.1:5500/front/src/contact/index.html">CONTACT</a>
</div>

<div className="box-container">

    <div className="box">
        <img src="images\img1.jpg" alt=""/>
        <div className="info">
            <h3>EVENT1</h3>
            <p>DETAILS</p>
            <a href="http://127.0.0.1:5500/front/src/form/index.html" className="btn">REGISTER</a>
        </div>
    </div>

    <div className="box">
        <img src="images/img2.jpg" alt=""/>
        <div className="info">
            <h3>EVENT2</h3>
            <p>details</p>
            <a href="http://127.0.0.1:5500/front/src/form/index.html" className="btn">REGISTER</a>
        </div>
    </div>

    <div className="box">
        <img src="images/img3.jpg" alt=""/>
        <div className="info">! 
            <h3>EVENT3</h3>
            <p>details</p>
            <a href="http://127.0.0.1:5500/front/src/form/index.html" className="btn">REGISTER</a>
        </div>
    </div>

    
    <div className="box">
        <img src="images/img4.jpg" alt=""/>
        <div className="info">
            <h3>EVENT4</h3>
            <p>details</p>
            <a href="http://127.0.0.1:5500/front/src/form/index.html" className="btn">REGISTER</a>
        </div>
    </div>

    <div className="box">
        <img src="images/img5.jpg" alt=""/>
        <div className="info">
            <h3>EVENT5</h3>
            <p>details</p>
            <a href="http://127.0.0.1:5500/front/src/form/index.html" className="btn">REGISTER</a>
        </div>
    </div>
    <div className="box">
        <img src="images/img6.jpg" alt=""/>
        <div className="info">
            <h3>EVENT6</h3>
            <p>details</p>
            <a href="http://127.0.0.1:5500/front/src/form/index.html" className="btn">REGISTER</a>
        </div>
    </div>

</div>

</section>
</>        
    )
}
export default Listcs;