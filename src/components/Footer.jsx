import "./Footer.css";

import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      {/* =================================================
          MAIN FOOTER CONTENT
          ================================================= */}

      <div className="footer-container">

        {/* =================================================
            PERSONAL BRAND
            ================================================= */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <img
              src="/src/assets/logo.png"
              alt="Amanya Godfrey logo"
            />

            <span>Amanya Godfrey</span>
          </a>

          <p className="footer-description">
            Building modern websites, web applications and digital
            experiences with technology and creativity.
          </p>

          <p className="footer-role">
            Full Stack Developer
          </p>

        </div>


        {/* =================================================
            QUICK LINKS
            ================================================= */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#training">Training</a>

          <a href="#services">Services</a>

          <a href="#support">Support My Work</a>

          <a href="#contact">Contact</a>

        </div>


        {/* =================================================
            CONNECT
            ================================================= */}

        <div className="footer-column">

          <h3>Connect</h3>

          <a
            href="https://www.linkedin.com/in/amanya-godfrey-74b20b318/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/godfrey_amanya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/250794440331"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <a href="mailto:amanyag157@gmail.com">
            Email Me
          </a>

        </div>


        {/* =================================================
            MORE
            ================================================= */}

        <div className="footer-column">

          <h3>More</h3>

          <a href="#support">
            Support My Work
          </a>

          <a href="#ai-assistant">
            Ask AI Assistant
          </a>

          <a href="#contact">
            Start a Conversation
          </a>

        </div>

      </div>


      {/* =================================================
          SOCIAL ICONS
          ================================================= */}

      <div className="footer-socials">

        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/amanya-godfrey-74b20b318/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-icon"
        >
          <FaLinkedinIn />
        </a>


        {/* Instagram */}

        <a
          href="https://www.instagram.com/godfrey_amanya/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-icon"
        >
          <FaInstagram />
        </a>


        {/* WhatsApp - Amanya */}

        <a
          href="https://wa.me/250794440331"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="social-icon"
        >
          <FaWhatsapp />
        </a>


        {/* WhatsApp - second number */}

        <a
          href="https://wa.me/250756523276"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp - second number"
          className="social-icon"
        >
          <FaWhatsapp />
        </a>


        {/* Email */}

        <a
          href="mailto:amanyag157@gmail.com"
          aria-label="Email Amanya Godfrey"
          className="social-icon"
        >
          <FaEnvelope />
        </a>

      </div>


      {/* =================================================
          FOOTER BOTTOM
          ================================================= */}

      <div className="footer-bottom">

        <p>
          © 2026 Amanya Godfrey. All rights reserved.
        </p>

        <p>
          Designed &amp; Developed by Amanya Godfrey
        </p>

      </div>

    </footer>
  );
}

export default Footer;