import React,{useEffect} from "react";
import {Link} from 'react-router-dom'
import header from './images/header-img.png'
import img1 from './images/img1.jpg'
import './List.css'

function List(){

    // let menu = document.querySelector('#menu-bar');
    // let navbar = document.querySelector('.navbar');
    
    // menu.addEventListener('click', () =>{
    //     menu.classList.toggle('fa-times');
    //     navbar.classList.toggle('nav-toggle');
    // });
    
    // window.onscroll = () =>{
    //     menu.classList.remove('fa-times');
    //     navbar.classList.remove('nav-toggle');
    // }

    return(
        <>
        <header>

        <img src="images/logo-1.png" alt="" />


        </header>



        <section class="event" id="event">

        <div class="heading">
            <h1>EVENTS</h1>
            {/* <img src="images/header-im.png" alt="" width="500px" /> */}
        </div>


        <div class="box-container">

            <div class="box">
            <h3>EVENT1</h3>
                <div class="info">
                    
                <a href="" class="btn">DETAILS</a>
                </div>
            </div>

            <div class="box">
                <h3>EVENT2</h3>
                <div class="info">
                    
                    <a href="" class="btn">DETAILS</a>
                </div>
            </div>

            <div class="box">
                <h3>EVENT3</h3>
                <div class="info">
                    
                    <a href="" class="btn">DETAILS</a>
                </div>
            </div>

            
            <div class="box">
                <h3>EVENT4</h3>
                <div class="info">
                    
                    <a href="" class="btn">DETAILS</a>
                </div>
            </div>

            <div class="box">
                <h3>EVENT5</h3>
                <div class="info">
                    
                    <a href="" class="btn">DETAILS</a>
                </div>
            </div>

            <div class="box">
                <h3>EVENT6</h3>
                <div class="info">
                    
                    <a href="" class="btn">DETAILS</a>
                </div>
            </div>
            <div class="box">
                <h3>EVENT7</h3>
                <div class="info">
                    
                    <a href="" class="btn">DETAILS</a>
                </div>
            </div>
            <div class="box">
                <h3>EVENT8</h3>
                <div class="info">
                    
                    <a href="" class="btn">DETAILS</a>
                </div>
            </div>
            <div class="box">
                <h3>EVENT9</h3>
                <div class="info">
                    
                    <a href="" class="btn">DETAILS</a>
                </div>
            </div>

        </div>

        </section>

        </>  
    )
}
export default List;