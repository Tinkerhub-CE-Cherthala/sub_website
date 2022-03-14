
import './Schedule.css';
import React,{useState} from 'react';
import react from 'react';
import { Link } from 'react-router-dom';

function Schedule() {
   
        return (
            <>
        <div class="cont">
        <Link to='/Days'>    
            <button class="click">Schedule</button>
        </Link>    
    </div>
    </>
  )
}


export default Schedule;