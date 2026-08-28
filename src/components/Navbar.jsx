// =========================================================
// NAVBAR
// =========================================================

import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* =================================================
            BRAND
        ================================================== */}

        <a
          href="#home"
          className="brand"
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
            NAVIGATION LINKS
        ================================================== */}

        <nav className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#training">
            Training
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#support">
            Support
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>

        {/* =================================================
            NAVIGATION ACTIONS
        ================================================== */}

        <div className="nav-actions">

          {/* Admin Login */}

          <a
            href="/admin"
            className="admin-button"
          >
            Admin
          </a>

          {/* Contact */}

          <a
            href="#contact"
            className="nav-button"
          >
            Get In Touch
          </a>

        </div>

      </div>

    </header>
  );
}

export default Navbar;