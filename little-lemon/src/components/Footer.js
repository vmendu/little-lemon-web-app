import React from 'react'
import logo from './images/logo.png'
import './footer.css';

function Footer() {
  return (
    <>
    <footer>
    <div className="container-footer">
      <div className="wrapper-footer">
      <div className="footer-widget">
      <a href="home"className="logo-link-footer">
    <img src={logo} alt="Logo-footer" className="logo-footer"  />
    </a>
      <p className="description-footer">
        Come and experience the captivating flavors of the Mediterranean at <br />
        Little Lemon where every dish tells a story, and every bite transports you <br />
        to a sun-drenched paradise of culinary delight.
      </p>

          <ul className="socials">
            <li>
              <a href="#">  <ion-icon name="logo-facebook"></ion-icon></a>
            </li>
            <li>
              <a href="#">  <ion-icon name="logo-twitter"></ion-icon></a>
            </li>
            <li>
              <a href="#"> <ion-icon name="logo-instagram"></ion-icon></a>
            </li>
            <li>
              <a href="#"> <ion-icon name="logo-linkedin"></ion-icon></a>
            </li>
          </ul>
        </div>
          <div className="footer-widget">
            <ul className="links">
              <h6>Quick Links </h6>
              <li><a href="home">Home</a></li>
              <li><a href="about">About</a></li>
              <li><a href="menu">Menu</a></li>
              <li><a href="reservations">Reservations</a></li>
              <li><a href="order">Order Online</a></li>
              <li><a href="login">Login</a></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Contact</h6>
            <ul className="links">
              <li><a href="#">Address</a></li>
              <li><a href="#">Phone Number</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Socials</h6>
            <ul className="links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright-wrapper">
          <p> Designed and Developed by
            <a href="#" target="blank">Little Lemon</a>
          </p>
        </div>
    </div>
 </footer>
 </>
  )
}

export default Footer;

