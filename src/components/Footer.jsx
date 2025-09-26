import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Pages Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Pages</h3>
          <ul className="footer-links">
            <li><a href="#/opportunities">Opportunities</a></li>
            <li><a href="#/about">About us</a></li>
            <li><a href="#/blog">Blog</a></li>
            <li><a href="#/contact">Contact us</a></li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Social Media</h3>
          <ul className="footer-links">
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links">
            <li><a href="/privacy">Privacy and Cookies Policy</a></li>
            <li><a href="/terms">Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Brand Logo and Name */}
        
        {/* Brand Logo and Name */}
<div className="footer-brand">
  <a href="#/">
    <img
      src="../src/assets/img/Asset 7.png"
      alt="Green Gate 4 MENA Youth"
      className="footer-logo"
    />
  </a>
</div>



      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>Green Gate For MENA Youth ©</p>
        </div>
        <div className="footer-designer">
          <p>Design by Mohamed Amin Sayhi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;