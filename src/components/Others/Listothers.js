import React,{useEffect} from "react";
import {Link} from 'react-router-dom'
import Listt from './Listothers.module.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Navbar from "../Navbar/Navbar";

function Listothers(){
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
                    <h3>Mjolnir</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/Mjolnir' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>QUIZ – O – PHILE</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/QuizOPhile' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>  

                <div class={Listt.box} data-aos="fade-up">
                <h3>TECH TODAY</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/TECH-TODAY' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>Risus</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/Risus' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>SOLDER SPIN</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/SOLDER-SPIN' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>Photography</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/Photography' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>Spot Photography</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/SpotPhotography' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>Virtual games</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/VirtualGames' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>Star of zealous</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/StarOfZealous' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                
                

            </div>

            </section>
        </div>



        </>  
    )
}
export default Listothers;