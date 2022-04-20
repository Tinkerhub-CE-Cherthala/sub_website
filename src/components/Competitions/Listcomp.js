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
                <h3>RACEZILLA Z5.0</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/racezilla' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>Mind Zone Invaders Z5.0</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/MindZoneInvaders' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>Turn a' round Z5.0</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/TurnARound' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>Short circuit Z5.0</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/ShortCircuit' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>Prison Break</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/PrisonBreak' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                    <h3>Credorian</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/Credorian' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>


                <div class={Listt.box} data-aos="fade-up">
                    <h3>DIG-THE-BUG</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/DIG-THE-BUG' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>
                
                <div class={Listt.box} data-aos="fade-up">
                <h3>Crypto-Busters</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/Crypto-Busters' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>ZEA-MAD</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/ZEA-MAD' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>Mindspark</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/Mindspark' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>OHM DECODER</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/OHM-DECODER' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>RAINBOW</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/RAINBOW' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>WAVE DIMENSION</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/WAVE-DIMENSION' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>


                <div class={Listt.box} data-aos="fade-up">
                <h3>SOLDER SPIN</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/SOLDER-SPIN' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>


            </div>

            </section>
        </div>



        </>  
    )
}
export default Listcomp;