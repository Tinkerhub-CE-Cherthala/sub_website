import React from 'react'
import './Front.css';

export default function Front() {

    window.onload= function(){
        const navigation= document.querySelector('nav');
        document.getElementsByClassName('toggle').onClick = function(){
        
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    }}
 return (
    <>
        <header>
            <div class="main-bg"></div>
            <a class="zealous" href="#">Zealous</a>
            <div class="toggle"></div>
            <nav>
                <ul>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>

    </>
  )
}
