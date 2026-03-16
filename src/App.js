import "./App.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="container">

      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Nelakurthi Triveni</h1>
        <h2>B.Tech Information Technology Student</h2>
        <p>
          Passionate about building scalable web applications and solving
          real-world problems using modern technologies.
        </p>

        <div className="buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="skills"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Skills</h2>

          <div className="skills-grid">

    <div className="skill-card">
      <h3>Languages</h3>
      <p>Python • Java • C • JavaScript • SQL</p>
    </div>

    <div className="skill-card">
      <h3>Web Development</h3>
      <p>HTML • CSS • React.js • Node.js • Express.js • MongoDB</p>
    </div>

    <div className="skill-card">
      <h3>Core Concepts</h3>
      <p>Data Structures & Algorithms • DBMS • OOPS</p>
    </div>

    <div className="skill-card">
      <h3>Tools</h3>
      <p>VS Code • Eclipse • Oracle SQL Developer</p>
    </div>

  </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Stock Trading Platform</h3>
          <p>
            Real-time stock trading application with order simulation and
            portfolio tracking.
          </p>
        </div>

        <div className="project-card">
          <h3>AI Chatbot Web Application</h3>
          <p>
            GPT-powered chatbot with scalable frontend–backend integration.
          </p>
        </div>

      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="contact"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <h2>Contact</h2>

        <div className="socials">
          <a href="https://github.com/triveninelakurthi9">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/triveninelakurthi">
            <FaLinkedin />
          </a>
        </div>

      </motion.section>

    </div>
  );
}

export default App;
