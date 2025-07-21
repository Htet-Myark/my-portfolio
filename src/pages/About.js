import React from "react";
import "./css/about.css";
import SolarSystem from '../components/solarBg';

function About() {
  // Helper function to handle click
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

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
          <li className="certification-item" onClick={() => handleClick('https://www.datacamp.com/completed/statement-of-accomplishment/course/6d7b96d2ea7d718f241525d86e336e3b779e64dc')}>
            <strong>Introduction to Linear Modeling in Python</strong>
            <br />
            DataCamp Course
            <br />
            <span className="view-certificate">View Certificate</span>
          </li>

          <li className="certification-item" onClick={() => handleClick('https://www.datacamp.com/completed/statement-of-accomplishment/course/6007d7d6be7a3937217ded1a9824af25934ea8b3')}>
            <strong>Statistical Thinking in Python (Part 1)</strong>
            <br />
            DataCamp Course
            <br />
            <span className="view-certificate">View Certificate</span>
          </li>

          <li className="certification-item" onClick={() => handleClick('https://www.datacamp.com/completed/statement-of-accomplishment/course/a19321c5edf1abdb632d80db864da7cc30602e5e')}>
            <strong>Statistical Thinking in Python (Part 2)</strong>
            <br />
            DataCamp Course
            <br />
            <span className="view-certificate">View Certificate</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
