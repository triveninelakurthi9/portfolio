import "./App.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="container">

      {/* Hero Section */}
<motion.section
  className="hero"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="hero-content">

    <div className="hero-text">

      <span className="hero-tag">
        👋 Hello, I'm
      </span>

      <h1>Nelakurthi Triveni</h1>

      <h2>
        Full Stack Developer • AI Enthusiast • Software Engineering Aspirant
      </h2>

      <p>
        I'm a B.Tech Information Technology student passionate about building
        scalable full-stack web applications and AI-powered solutions that solve
        real-world problems. I enjoy transforming ideas into intuitive,
        user-friendly products using React, Node.js, Express.js, and MongoDB.
      </p>

      <p>
        Currently focused on strengthening my software engineering skills,
        exploring modern web technologies, and building impactful projects while
        preparing for opportunities at leading product-based companies.
      </p>

      <div className="buttons">
        <a href="#projects" className="primary-btn">
          View Projects
        </a>

        <a href="#contact" className="secondary-btn">
          Contact Me
        </a>
      </div>

    </div>

    <motion.div
      className="hero-image"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <img
        src="/triveni(portfolio).jpg"
        alt="Nelakurthi Triveni"
      />
    </motion.div>

  </div>
</motion.section>

      <section className="skills">

<h2>Technology Stack</h2>

<div className="skills-grid">

<div className="skill-card">

<h3>Languages</h3>

<p>Java • Python • JavaScript • SQL</p>

</div>

<div className="skill-card">

<h3>Frontend</h3>

<p>React.js • HTML5 • CSS3</p>

</div>

<div className="skill-card">

<h3>Backend</h3>

<p>Node.js • Express.js • REST APIs</p>

</div>

<div className="skill-card">

<h3>Database</h3>

<p>MongoDB • Oracle SQL</p>

</div>

<div className="skill-card">

<h3>Core Computer Science</h3>

<p>DSA • OOP • DBMS</p>

</div>

<div className="skill-card">

<h3>Developer Tools</h3>

<p>Git • GitHub • VS Code</p>

</div>

</div>

</section>
<section className="journey">

<h2>Building Solutions That Matter</h2>

<p>
I enjoy creating applications that combine thoughtful user interfaces with
robust backend systems. My projects reflect my interest in scalable web
development, intelligent applications, and solving practical problems through
technology.
</p>

</section>

      {/* Featured Projects */}
<motion.section
  id="projects"
  className="projects"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <div className="section-header">
    <span className="section-tag">MY WORK</span>

    <h2>Featured Projects</h2>

    <p className="section-description">
      I enjoy building scalable full-stack applications that combine clean
      architecture, efficient backend systems, and intuitive user experiences.
      These projects reflect my passion for solving real-world problems through
      modern web technologies and AI-powered solutions.
    </p>
  </div>

  <div className="projects-grid">

    {/* Stock Trading Platform */}

    <motion.div
      className="project-card"
      whileHover={{ y: -8 }}
    >
      <h3>Stock Trading Platform</h3>

      <p>
        A full-stack stock trading platform inspired by Zerodha that enables
        secure authentication, stock order simulation, portfolio tracking, and
        efficient transaction management through scalable backend services.
      </p>

      <div className="tech-stack">
        <span>React.js</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>JWT</span>
      </div>

      <ul className="project-features">
        <li>Secure user authentication and authorization.</li>
        <li>Real-time order simulation and portfolio tracking.</li>
        <li>Scalable RESTful APIs for efficient data handling.</li>
        <li>Modular backend architecture for maintainability.</li>
      </ul>

      <a
        className="github-btn"
        href="https://github.com/triveninelakurthi9/StockTradingPlatform"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source Code →
      </a>
    </motion.div>

    {/* AI Chatbot */}

    <motion.div
      className="project-card"
      whileHover={{ y: -8 }}
    >
      <h3>AI-Powered Chatbot Web Application</h3>

      <p>
        An AI-powered conversational web application built using the GPT API,
        delivering intelligent responses through scalable frontend-backend
        integration and context-aware conversational workflows.
      </p>

      <div className="tech-stack">
        <span>React.js</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>OpenAI API</span>
      </div>

      <ul className="project-features">
        <li>Integrated GPT API for intelligent conversations.</li>
        <li>Implemented prompt engineering and session handling.</li>
        <li>Scalable React and Express.js architecture.</li>
        <li>Robust API validation and error handling.</li>
      </ul>

      <a
        className="github-btn"
        href="https://github.com/triveninelakurthi9/AIChatApplication"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source Code →
      </a>
    </motion.div>

  </div>
</motion.section>
<section className="achievements">

<h2>Achievements & Certifications</h2>

<div className="achievement-card">

🏅 NPTEL Silver Elite Certification — Introduction to Internet of Things (85%)

</div>

<div className="achievement-card">

⭐ HackerRank Gold Badge — Problem Solving

</div>

<div className="achievement-card">

🐍 HackerRank Python Certification

</div>

<div className="achievement-card">

🎓 Front-End Development — Coursera

</div>

</section>

      {/* Contact */}
<motion.section
  id="contact"
  className="contact"
  initial={{ y: 60, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>

  <h2>Let's Connect</h2>

  <p className="contact-text">
    I'm currently seeking software engineering internships and full-time
    opportunities where I can contribute, learn, and build impactful
    applications. Whether you have an opportunity, project, or simply want
    to connect, I'd be happy to hear from you.
  </p>

  <div className="contact-details">

    <div className="contact-item">
      <h3>📧 Email</h3>
      <a href="mailto:yourmail@gmail.com">
        triveninelakurthi5@gmail.com
      </a>
    </div>

    <div className="contact-item">
      <h3>💻 GitHub</h3>
      <a
        href="https://github.com/triveninelakurthi9"
        target="_blank"
        rel="noreferrer"
      >
        github.com/triveninelakurthi9
      </a>
    </div>

    <div className="contact-item">
      <h3>💼 LinkedIn</h3>
      <a
        href="https://linkedin.com/in/triveninelakurthi"
        target="_blank"
        rel="noreferrer"
      >
        linkedin.com/in/triveninelakurthi
      </a>
    </div>

  </div>

  <div className="socials">

    <a
      href="https://github.com/triveninelakurthi9"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
    </a>

    <a
      href="https://linkedin.com/in/triveninelakurthi"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>

  </div>

</motion.section>
 <footer className="footer">
        <p>© 2026 Nelakurthi Triveni. Built with React.js & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
