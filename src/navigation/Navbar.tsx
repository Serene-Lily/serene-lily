import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from '../assets/sl_logo.png'
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

 return (
   <header className="header">
     <nav className="nav container">
       <NavLink to="/" className="nav__logo">
         <img src={logo} alt="Serene Lily" height={300} />
       </NavLink>

       <div
         className={`nav__menu ${showMenu ? "show-menu" : ""}`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link"  onClick={closeMenuOnMobile}>
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/projects" className="nav__link"  onClick={closeMenuOnMobile}>
               Projects
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/about"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               About Us
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/blog"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               Blog
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/contact" className="nav__cta">
               Contact Us
             </NavLink>
           </li>
         </ul>
         <div className="nav__close" id="nav-close" onClick={toggleMenu}>
           <IoClose />
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
         <IoMenu />
       </div>
     </nav>
   </header>
 );
};

export default Navbar;