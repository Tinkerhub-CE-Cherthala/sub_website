import React, {useState, useEffect} from 'react'
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../images/logo thick 1.png'
import Fade from 'react-reveal'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  // const [navbar,setNavbar] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  //  const changeBackground = ()=>{
  //    if(window.scrollY>100){
  //      setNavbar(true);
  //    }
  //   else{
  //      setNavbar(false);
  //    }
  //  }  
useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
  }, 
  
  [])
  //  useEffect(() => {
  //    window.addEventListener('scroll',changeBackground);  
  //    return () => {
  //      window.removeEventListener('scroll',changeBackground);
  //    }
  //  }, [])
  


  


  return (
     <Fade top>
    <nav className='navnav'>

      <div className='navlogo'>
        <img src={logo} alt="" />
        {/* <h2 className='zealous'>Zealous</h2> */}
      
      </div>
      {(toggleMenu || screenWidth > 750) && (
      <ul className="list">

      <Link to="/#home" id='items' onClick={toggleNav}>

      <li className='navcolor'>
        Home  
      </li>
      </Link> 
        
      <Link to="/#events" id='items' onClick={toggleNav}>
      <li className='navcolor'>
         Events
      </li>
      </Link>
    
      <a href="/#about" id='items' onClick={toggleNav}>
      <li className='navcolor'>
        About
      </li>
      </a>
      <a href="/#about" id='items' onClick={toggleNav}>
      
      </a>
    </ul>
       
      )}

      <div onClick={toggleNav} className="btnnav"></div>
    </nav>
    </Fade>
  )
}