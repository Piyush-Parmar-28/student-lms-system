import React from "react";
import { Link } from "react-router-dom";

// React Components must start from uppercase
function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div className="container">
        <Link to="/">
          <div className="navbar-brand logo">sManager</div>
        </Link>

        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/">
                <div className="nav-link">Home</div>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to= "/login">
                <div className="nav-link">Login</div>
              </Link>
            </li>

            <li className="nav-item">
              <Link to= "/signUp">
                <div className="nav-link">Sign Up</div>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to= "/contactUs">
                <div className="nav-link">Contact Us</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
