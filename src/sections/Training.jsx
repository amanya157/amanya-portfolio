import "./Training.css";

function Training() {
  return (
    <section className="training-section" id="training">
      <div className="training-container">

        <div className="section-heading training-heading">
          <p className="section-label">TRAINING & LEARNING</p>

          <h2>
            Where I <span>Built My Skills</span>
          </h2>

          <p className="training-intro">
            My development journey has involved practical learning through
            different institutions, where I have continued building the
            technical foundation I use today.
          </p>
        </div>

        <div className="training-grid">

          <article className="training-card">
            <div className="training-number">01</div>

            <div className="training-card-content">
              <span className="training-type">FRONTEND DEVELOPMENT</span>

              <h3>KLAB Institute</h3>

              <p>
                I studied frontend development at KLAB Institute, where I
                developed my foundation in HTML and learned how websites are
                structured and presented to users.
              </p>

              <div className="training-tags">
                <span>HTML</span>
                <span>Frontend</span>
                <span>Web Development</span>
              </div>
            </div>
          </article>

          <article className="training-card">
            <div className="training-number">02</div>

            <div className="training-card-content">
              <span className="training-type">JAVASCRIPT DEVELOPMENT</span>

              <h3>CodeBridge Academy</h3>

              <p>
                At CodeBridge Academy, I continued developing my programming
                skills through JavaScript, strengthening my understanding of
                logic, interactivity and the development of dynamic web
                experiences.
              </p>

              <div className="training-tags">
                <span>JavaScript</span>
                <span>Programming</span>
                <span>Web Development</span>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}

export default Training;