import React,{useEffect} from "react";
import {Link} from 'react-router-dom'
import Listt from './Listcomp.module.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Navbar from "../Navbar/Navbar";

function Listcomp(){
    useEffect(()=>{
        Aos.init({duration: 1000});
    },[]);

    return(
        <>
        <div className={Listt.listout}>
        <Navbar />    

        <section class={Listt.event} id="event">

            <div class={Listt.heading}>
                <h1 className={Listt.h1}>EVENTS</h1>
                {/* <img src="images/header-im.png" alt="" width="500px" > */}
            </div>


            <div class={Listt.boxcontainer}>

                <div class={Listt.box} data-aos="fade-up">
                <h3>RACEZILLA Z3.0</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/racezilla' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>Mind Zone Invaders Z3.0</h3>
                    <div class={Listt.info}>
                        
                        <a href="https://rzp.io/l/TScCTTEKn" class={Listt.btn}>DETAILS</a>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>Turn a' round Z3.0</h3>
                    <div class={Listt.info}>
                        
                        <a href="https://rzp.io/l/TScCTTEKn" class={Listt.btn}>DETAILS</a>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>Short circuit Z3.0</h3>
                    <div class={Listt.info}>
                        
                        <a href="https://rzp.io/l/TScCTTEKn" class={Listt.btn}>DETAILS</a>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>Prison Break</h3>
                    <div class={Listt.info}>
                        
                        <a href="https://rzp.io/l/TScCTTEKn" class={Listt.btn}>DETAILS</a>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>EVENT6</h3>
                    <div class={Listt.info}>
                        
                        <a href="https://rzp.io/l/TScCTTEKn" class={Listt.btn}>DETAILS</a>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>EVENT7</h3>
                    <div class={Listt.info}>
                        
                        <a href="https://rzp.io/l/TScCTTEKn" class={Listt.btn}>DETAILS</a>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>EVENT8</h3>
                    <div class={Listt.info}>
                        
                        <a href="https://rzp.io/l/TScCTTEKn" class={Listt.btn}>DETAILS</a>
                    </div>
                </div>
                

            </div>

            </section>
        </div>



        </>  
    )
}
export default Listcomp;