import "./Services.css";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "I build responsive and modern user interfaces that work smoothly across desktops, tablets and mobile devices, with attention to structure, usability and visual presentation.",
    technologies: "HTML • CSS • JavaScript • React",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "I develop the server-side functionality that allows websites and applications to process information, communicate with databases and provide reliable functionality.",
    technologies: "Node.js • Express.js",
  },
  {
    number: "03",
    title: "Database Solutions",
    description:
      "I work with databases to store, organise and retrieve information efficiently, creating the foundation needed for applications that depend on structured data.",
    technologies: "MySQL • SQL",
  },
  {
    number: "04",
    title: "Full Stack Solutions",
    description:
      "I bring frontend, backend and database technologies together to create complete digital solutions that connect what users see with the systems working behind the scenes.",
    technologies: "React • Node.js • Express • MySQL",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="section-heading services-heading">
          <p className="section-label">WHAT I DO</p>

          <h2>
            Building Ideas Into <span>Digital Solutions</span>
          </h2>

          <p className="services-intro">
            My focus is on developing practical digital solutions by combining
            design, programming and technology. From the interface a visitor
            interacts with to the systems working behind it, I aim to create
            experiences that are useful, responsive and reliable.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-top">
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">↗</span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-technologies">
                {service.technologies}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;