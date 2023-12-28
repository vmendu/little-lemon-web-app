import React, { useState } from "react";
import './header.css';
import logo from './images/logo.png'



function Header () {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setMenuOpen(!isMenuOpen);
  };

    return (
        <>
        <header>
        <nav className="navbar">
          <div className="brand-title">
            <a href="home"className="logo-link-header">
          <img src={logo} alt="Logo" className="logo-header" />
          </a>
         </div>
         <a href="#" className="toggle-button" onClick={handleToggleClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li> <a href="home">Home</a></li>
              <li> <a href="about">About</a></li>
              <li> <a href="menu">Menu</a></li>
              <li> <a href="reservations">Reservations</a></li>
              <li> <a href="order">Online Ordering</a></li>
              <li> <a href="login">Login</a></li>
            </ul>
          </div>
        </nav>
      </header>
      </>
    )
}

export default Header;