import React from 'react';
import logo from '../../assets/images/creooo-logo.png'; 
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={logo} alt="Creooo logo" />
            </a>

            <p className="footer-text">Follow Creooo</p>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"><FaInstagram /></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"><FaFacebook /></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"><FaLinkedin /></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-link-list">
              <li><h3 className="h4 link-title">Company</h3></li>
              <li><a href="#home" className="footer-link">About Us</a></li>
              <li><a href="#about" className="footer-link">Services</a></li>
            </ul>

            <ul className="footer-link-list">
              <li><h3 className="h4 link-title">Support</h3></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright"><FaRegCopyright /> {currentYear} Creooo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;