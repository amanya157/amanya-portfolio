// =========================================================
// HERO SECTION
// =========================================================

import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="hero-content">

          <p className="hero-intro">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            I'm <span>Amanya Godfrey</span>
          </h1>

          <h2>
            Full Stack Developer
          </h2>

          <p className="hero-description">
            I design and develop modern, responsive and functional
            digital experiences that bring ideas to life. I combine
            frontend development, backend technologies and database
            solutions to build websites and applications that are
            not only visually appealing, but also reliable,
            practical and designed around the needs of their users.
          </p>

          {/* =================================================
              HERO BUTTONS
          ================================================== */}

          <div className="hero-buttons">

            <a
              href="#about"
              className="primary-btn"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Get In Touch
            </a>

          </div>

          {/* =================================================
              HERO STATS
          ================================================== */}

          <div className="hero-stats">

            <div>
              <strong>
                Full Stack
              </strong>

              <span>
                Development
              </span>
            </div>

            <div>
              <strong>
                Modern
              </strong>

              <span>
                Web Solutions
              </span>
            </div>

            <div>
              <strong>
                Always
              </strong>

              <span>
                Learning
              </span>
            </div>

          </div>

        </div>

        {/* =================================================
            HERO VISUAL
        ================================================== */}

        <div className="hero-visual">

          <div className="hero-glow"></div>

          <div className="hero-image-card">

            <img
              src={heroImage}
              alt="Amanya Godfrey"
            />

          </div>

          {/* =================================================
              FRONTEND CARD
          ================================================== */}

          <div className="floating-card card-one">

            <span>
              ⚡
            </span>

            <div>

              <strong>
                Frontend
              </strong>

              <small>
                Modern Interfaces
              </small>

            </div>

          </div>

          {/* =================================================
              BACKEND CARD
          ================================================== */}

          <div className="floating-card card-two">

            <span>
              ⌘
            </span>

            <div>

              <strong>
                Backend
              </strong>

              <small>
                Powerful Systems
              </small>

            </div>

          </div>

          {/* =================================================
              DATABASE CARD
          ================================================== */}

          <div className="floating-card card-three">

            <span>
              ◈
            </span>

            <div>

              <strong>
                Database
              </strong>

              <small>
                Smart Solutions
              </small>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;