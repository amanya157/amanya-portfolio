import "./About.css";
function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>
          <h2>
            A Journey Built on <span>Technology & Growth</span>
          </h2>
        </div>

        <div className="about-content">

          <div className="about-intro">
            <p>
              My journey into technology was not a simple one, and the
              decision to take this path was not something I made without
              thought. Like many important decisions in life, choosing
              technology required curiosity, commitment and the willingness
              to step outside my comfort zone. As I continued learning,
              experimenting and discovering what could be achieved through
              technology, I began to understand that development was more
              than simply writing code. It was a way of turning ideas into
              useful solutions and creating experiences that can make a
              meaningful difference.
            </p>

            <p>
              I have continued building my skills across frontend development,
              backend development and databases, while also exploring
              different technologies and programming concepts. Every project,
              challenge and new concept has become another opportunity to
              improve my understanding and become a better developer. I
              believe that becoming a strong developer is not about knowing
              everything at once, but about being willing to learn, adapt,
              solve problems and keep improving as technology continues to
              change.
            </p>
          </div>

          <div className="about-message">
            <div className="message-number">01</div>

            <div>
              <h3>Why Technology?</h3>

              <p>
                Technology has become one of the most powerful ways to create
                opportunities, solve problems and connect people with ideas.
                Businesses, organisations and individuals increasingly depend
                on digital solutions to communicate, work, learn and grow.
                This is why I believe that technology is a path worth taking
                seriously. Learning how to build with technology gives us the
                ability not only to understand the digital world around us,
                but also to become creators within it.
              </p>

              <p>
                My goal is to continue developing the knowledge and practical
                experience needed to build modern digital solutions that are
                useful, reliable and accessible. I want my work to reflect
                continuous learning, creativity and problem-solving while
                allowing me to grow alongside the technology industry.
              </p>
            </div>
          </div>

        </div>

        <div className="about-highlights">
          <div className="about-card">
            <span>01</span>
            <h3>Continuous Learning</h3>
            <p>
              I believe every new technology and every challenge is an
              opportunity to learn something valuable.
            </p>
          </div>

          <div className="about-card">
            <span>02</span>
            <h3>Problem Solving</h3>
            <p>
              Development is about understanding problems and turning ideas
              into practical digital solutions.
            </p>
          </div>

          <div className="about-card">
            <span>03</span>
            <h3>Building for the Future</h3>
            <p>
              I am focused on developing skills that allow me to grow with
              technology and contribute to the digital future.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;