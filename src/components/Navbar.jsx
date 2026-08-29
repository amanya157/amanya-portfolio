
// =========================================================
// NAVBAR
// =========================================================

import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {

  // =======================================================
  // MOBILE MENU STATE
  // =======================================================

  const [menuOpen, setMenuOpen] = useState(false);

  // =======================================================
  // CLOSE MOBILE MENU
  // =======================================================

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* =================================================
            BRAND
        ================================================== */}

        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
        >

          <img
            src={logo}
            alt="Amanya Godfrey logo"
          />

          <span>
            Amanya Godfrey
          </span>

        </a>


        {/* =================================================
            DESKTOP NAVIGATION LINKS
        ================================================== */}

        <nav className="nav-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#training">Training</a>

          <a href="#services">Services</a>

          <a href="#support">Support</a>

          <a href="#contact">Contact</a>

        </nav>


        {/* =================================================
            NAVIGATION ACTIONS
            These remain visible on mobile.
        ================================================== */}

        <div className="nav-actions">

          {/* Admin */}

          <a
            href="/admin"
            className="admin-button"
          >
            Admin
          </a>


          {/* Get In Touch */}

          <a
            href="#contact"
            className="nav-button"
          >
            Get In Touch
          </a>

        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>


      {/* =================================================
          MOBILE NAVIGATION MENU

          Only normal navigation links appear here.
          Admin and Get In Touch stay in the navbar above.
      ================================================== */}

      <nav
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
      >

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#training" onClick={closeMenu}>
          Training
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#support" onClick={closeMenu}>
          Support
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

    </header>
  );
}

export default Navbar;

