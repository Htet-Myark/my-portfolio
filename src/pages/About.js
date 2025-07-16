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
          <li>🎓 Year 3 student at Singapore Polytechnic</li>
          <li>💻 Specialized in Software Development</li>
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

        <h2>Languages I Speak</h2>
        <ul className="facts-list">
          <li>🇬🇧 English – Fluent</li>
          <li>🇲🇲 Burmese – Native</li>
        </ul>

        {/* New Certifications Section */}
        <h2>Certifications</h2>
        <ul className="certifications-list">
          
          
          
            <a
              href="https://www.datacamp.com/completed/statement-of-accomplishment/course/6d7b96d2ea7d718f241525d86e336e3b779e64dc"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#4f7d59ff",
                textDecoration: "none",
                outline: "none"
              }}
            >
              <li>
            <strong>Python for Data Science</strong> 

            <br />
            DataCamp Course
            <br />
              View Certificate
               </li>
            </a>
         
        </ul>
      </div>
    </>
  );
}

export default About;
