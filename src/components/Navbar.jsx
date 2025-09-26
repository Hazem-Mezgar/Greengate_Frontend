import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
       
       {/* Logo */}
<div className="navbar-logo">
  <a href="#/" className="logo-link">
    <img
      src="src/assets/img/Asset 11.png"
      alt="Green Gate 4 MENA Youth"
      className="navbar-logo-img"
    />
  </a>
</div>

        {/* Navigation Links */}
        <div className="navbar-menu">
          <NavLink to="/" end className={({isActive}) => `navbar-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `navbar-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/opportunities" className={({isActive}) => `navbar-link ${isActive ? 'active' : ''}`}>Opportunities</NavLink>
          <NavLink to="/blog" className={({isActive}) => `navbar-link ${isActive ? 'active' : ''}`}>Blog</NavLink>
    <NavLink
  to="/contact"
  className={({ isActive }) => `navbar-button ${isActive ? 'active' : ''}`}
>
  Contact
</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;