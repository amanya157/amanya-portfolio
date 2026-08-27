import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiExpress, SiMysql } from "react-icons/si";

const technologies = [
  {
    name: "HTML5",
    category: "Frontend",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <FaJs />,
  },
  {
    name: "React",
    category: "Frontend",
    icon: <FaReact />,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs />,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <SiExpress />,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: <SiMysql />,
  },
  {
    name: "Python",
    category: "Programming",
    icon: <FaPython />,
  },
  {
    name: "Git",
    category: "Tools",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: <FaGithub />,
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="section-heading skills-heading">
          <p className="section-label">MY TECHNOLOGIES</p>

          <h2>
            Tools I Use to <span>Build</span>
          </h2>

          <p className="skills-intro">
            I work with a growing range of technologies across frontend,
            backend, database and programming development. These tools allow
            me to turn ideas into responsive interfaces, functional
            applications and connected digital solutions.
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map((technology) => (
            <div
              className="technology-card"
              key={technology.name}
            >
              <div className="technology-icon">
                {technology.icon}
              </div>

              <div className="technology-info">
                <h3>{technology.name}</h3>
                <p>{technology.category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;