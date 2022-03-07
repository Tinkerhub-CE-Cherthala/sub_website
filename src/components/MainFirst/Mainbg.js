import './Mainbg.css';
import logo from '../../images/logo thick 1.png';
import Event from '../Events/Event';



function Mainbg() {

    window.addEventListener("scroll",function(){
        const header= document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0);
    });
    
    
    window.onload= function(){
        const navigation= document.querySelector('nav');
    document.querySelector('.toggle').onclick = function(){
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    }}




    return (

        <div>

        
        <header>
        <div class="main-bg"></div>
        <div class="logo">
            <img class="logo1" src={logo} alt="logo" />
            <div class="logo2">
                <a href="./Mainbg.js">Zealous</a>
                <p>Explore the New Horizons</p>
            </div>
        </div>
        <a class="zealous" href="./Mainbg.js">Zealous</a>
        <div class="toggle"></div>
        <nav className='navbar'>
            <ul>
                <li><a href="./Event">Events</a></li>
                <li><a href="./Event">About</a></li>
                <li><a href="./Event">Contact</a></li>
            </ul>
        </nav>
    </header>
    </div>
    );
}
export default Mainbg;

