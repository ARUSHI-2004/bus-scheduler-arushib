import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Directly reference the logo in the public folder */}
        <img src="/assets/logo.png" alt="GroupBus Logo" className="navbar-logo" />
        <Link to="/">WeBus</Link>
      </div>
      <div className="navbar-links">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <div className="navbar-buttons">
          <Link to="/login" className="button">Login</Link>
          <Link to="/signup" className="button">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
