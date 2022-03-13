import React from 'react'
import { Link } from 'react-router-dom';
import './Main.css';

export default function Main() {
  return (
    <>
    <section class="sec" id="sec1">
        <div class="contain">
            <h2>hello</h2>
            <Link to='/main'>
            <div class="scroll"></div>
            </Link>
        </div>
    </section>
    </>
  )
}
