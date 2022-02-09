import general from '../../images/general.png';
import ece from '../../images/ece.png';
import eee from '../../images/eee.png';
import cse from '../../images/computer.png';
import Eventcss from './Event.module.css'
import {Link} from 'react-router-dom';


function Event() {
    return (
        <div>
            <div class={Eventcss.event}>
    <p>Events</p>
  </div>
  <div class={Eventcss.section2}>
  <div class ={Eventcss.container}>
    <div class = {Eventcss.card}>
      <div class = {Eventcss.image}>
        <Link to='/general/List'><img src = {general} alt='general' /></Link>
      </div>
     
    </div>
    <div class = {Eventcss.card}>
      <div class = {Eventcss.image}>
       <Link to='/ece/Listec'>
        <img href = "#" src = {ece} alt='ece' />
       </Link>
      </div>
      <div class = {Eventcss.content}>
        <a class={Eventcss.view} href="http://127.0.0.1:5500/front/src/event/index.html">
          <span>view</span>
          <span>view</span>
        </a>
      </div>
    </div>
    <div class = {Eventcss.card}>
      <div class = {Eventcss.image}>
      <Link to="/eee/Listee">
        <img href = "#" src = {eee} alt='eee' />
      </Link>

      </div>
      <div class = {Eventcss.content}>
        <a class="view" href="http://127.0.0.1:5500/front/src/event/index.html">
          <span>view</span>
          <span>view</span>
        </a>
      </div>
    </div>  
    <div class = {Eventcss.card}>
      <div class = {Eventcss.image}>
        <Link to="/cse/Listcs">
        <img href = "#" src ={cse} alt='cse' />
        </Link>
      </div>
      <div class = {Eventcss.content}>
        <a class={Eventcss.content} href='./Event'>
          <span>view</span>
          <span>view</span>
        </a>
      </div>
    </div>   
  </div>
</div>
        </div>    
    );
}

export default Event;
