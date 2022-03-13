import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])
  


  return (
    <nav className='navnav'>
        <h1 className="zealous">Zealous</h1>
      {(toggleMenu || screenWidth > 750) && (
      <ul className="list">
      <Link to='/'>    
      <li className="items">Home</li>
      </Link>
      <li className="items">Events</li>
      <li className="items">About</li>
    </ul>
      )}

      <div onClick={toggleNav} className="btnnav"></div>
    </nav>
  )
}