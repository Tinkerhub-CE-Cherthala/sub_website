import React,{useEffect} from "react";
import {Link} from 'react-router-dom'
import Listt from './List.module.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Navbar from "../Navbar/Navbar";
import Mainfooter from '../Mainfooter/Mainfooter'

function List(){
    useEffect(()=>{
        Aos.init({duration: 1000});
    },[]);

    return(
        <>
        <div className={Listt.listout}>
            <div className={Listt.worknv}>

        <Navbar />    
            </div>

        <section class={Listt.event} id="event">

            <div class={Listt.heading}>
                <h1 className={Listt.h1}>EVENTS</h1>
                {/* <img src="images/header-im.png" alt="" width="500px" > */}
            </div>


            <div class={Listt.boxcontainer}>

                <div class={Listt.box} data-aos="fade-up">
                <h3>Ethical Hacking</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/EthicalHacking' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>Web 3 & Blockchain</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/Web3-Blockchain' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>Electric Vehicles</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/ElectricVehicles' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box} data-aos="fade-up">
                <h3>Managerial Workshop</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/Generalws' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box}>
                <h3>ADAS & Machine Learning</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/ADAS' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>

                <div class={Listt.box}>
                <h3>Solder spin</h3>
                    <div class={Listt.info}>
                        
                    <Link to='/SOLDER-SPIN' class={Listt.btn}>DETAILS </Link>
                    </div>
                </div>
               

            </div>

            </section>
        </div>

        <Mainfooter/>

        </>  
    )
}
export default List;