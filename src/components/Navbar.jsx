// filepath: c:\Users\gavin\Desktop\cs projects\tiktok personal website\src\components\Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        gavinmytype
      </Link>

      {/* Hamburger Button */}
      <button 
        className={`hamburger ${open ? 'active' : ''}`} 
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Nav links */}
      <nav className={`navbar ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="/products" onClick={() => setOpen(false)}>
          Product Links
        </Link>
        <Link to="/monkeytype" onClick={() => setOpen(false)}>
          GavinType
        </Link>
        <Link to="/keytester" onClick={() => setOpen(false)}>
          KeyTester
        </Link>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=gavinmytype@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
