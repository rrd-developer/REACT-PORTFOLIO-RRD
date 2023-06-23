import "./NavbarStyles.css";
import{Link} from "react-router-dom"

import React, { useState } from 'react'
import{FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {

    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click)

    const [color,setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=1){
      setColor(true)
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll",changeColor);
  return (
    <div className={color?"header header-bg" :"header"}>
        <Link to="/">
            <h1>PORTFOLIO</h1>
        </Link>
        <ul className={click ? "navbar-menu active" :"navbar-menu"}>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <Link to="/project">PROJECT</Link>
            </li>
            <li>
                <Link to="/contact">CONTACT</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick} >
            {click ?(<FaBars size={20} style={{color:"white"}}/>) :(<FaTimes size={20} style={{color:"white"}}/>)}
            
            

        </div>

    </div>
  )
}

export default Navbar