import React from 'react';
import './Footer.css';
import LazyImage from './LazyImage'; // Import LazyImage component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <LazyImage src="logo.png" alt="Homepress Logo" /> {/* Use LazyImage component */}
          <span>homepress</span>
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      {/* <div className="footer-links">
        <a href="/">Home</a>
        <a href="/listing">Listing</a>
        <a href="/property">Property</a>
        <a href="/pages">Pages</a>
        <a href="/idx-pages">IDX Pages</a>
      </div> */}
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>ABOUT</h3>
            <p>
              Fusce quis tellus nulla. Donec sodales mauris eget pellentesque hendrerit. Donec molestie non urna sit amet
              aliquet. Curabitur sit amet est nec nulla varius fermentum.
            </p>
          </div>
          <div className="footer-column">
            <h3>CONTACT INFO</h3>
            <p>Call-centre: 1 (323) 938-5798</p>
            <p>Fax: 1 (888) 637-7262</p>
            <p>Email: info@styleixthemes.com</p>
            <p>1840 E Garvey Avenue Street</p>
            <p>West Covina, CA 91791, U.S.</p>
            <p>Monday – Friday: 9:00am – 9:00pm</p>
          </div>
          <div className="footer-column">
            <h3>REAL ESTATE MARKERS</h3>
            <ul>
              <li>Pricing Plans</li>
              <li>Our Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>
                <a href="#">More &rsaquo;</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>INFORMATION</h3>
            <ul>
              <li>Apartment for Rent</li>
              <li>Apartment Low to hide</li>
              <li>Offices for Buy</li>
              <li>Offices for Rent</li>
              <li>
                <a href="#">More &rsaquo;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024  – Real Estate  Theme by Mukesh Yadav.</p>
      </div>
    </footer>
  );
};

export default Footer;
