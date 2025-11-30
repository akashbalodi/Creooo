import React, { useState } from 'react';
import logo from '../../assets/images/creooo-logo.png'; // Adjust path based on your file structure
import { HiOutlineMenu } from "react-icons/hi";
import { useEffect } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
   useEffect(() => {
    // Preconnect to Google Fonts
    const preconnectGoogle = document.createElement('link');
    preconnectGoogle.rel = 'preconnect';
    preconnectGoogle.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnectGoogle);

    const preconnectGstatic = document.createElement('link');
    preconnectGstatic.rel = 'preconnect';
    preconnectGstatic.href = 'https://fonts.gstatic.com';
    preconnectGstatic.crossOrigin = 'true';
    document.head.appendChild(preconnectGstatic);

    // Load Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} alt="Creooo logo" />
        </a>

        <div className="navbar-wrapper">
          <button className="navbar-menu-btn" onClick={toggleNavbar}>
            <ion-icon name="menu-outline"><HiOutlineMenu />
</ion-icon>
          </button>

          <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
            <ul className="navbar-list">
              <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="#features" className="nav-link">Why Creooo?</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;