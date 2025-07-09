import React from "react";
import "./css/about.css";
import SolarSystem from '../components/solarBg';

function About() {
  return (
    <>
    
    <div className="about-container">
      <SolarSystem />
      
      <h1>About Me</h1>
      <p className="about-intro">
        Hello! I'm <strong>Htet Myark</strong>, a passionate web developer with
        a love for clean design and powerful code. I specialize in building
        modern, responsive web applications using <strong>React</strong>,{" "}
        <strong>JavaScript</strong>, and related technologies.
      </p>

      <h2>Skills</h2>
      <ul className="skills-list">
        <li>🔧 JavaScript (ES6+)</li>
        <li>⚛️ React </li>
        <li>🎨 HTML5 / CSS3</li>
        <li>🖼️ UI/UX Design Basics</li>
        <li>🐘 PostgreSQL</li>
        <li>🐍 Python</li>
        
        <li>📦 Git & GitHub</li>
      </ul>

      <h2>Quick Facts</h2>
      <ul className="facts-list">
        <li>🌏 Based in Singapore</li>
        <li>🎓 Software Dev Student</li>
        <li>💼 Open to internships & freelance</li>
        <li>
          <a
            href="mailto:htetmyark@gmail.com"
            style={{
              textDecoration: "none",
              color: "inherit",
              outline: "none",
              cursor: "pointer",
            }}
          >
            📫 Click to reach me out
          </a>
        </li>
      </ul>
    </div></>
  );
}

export default About;
