import React from "react";

import "./css/about.css";


function About() {
  const handleClick = (url) => window.open(url, "_blank");

  return (
    <div className="about-container">

      
      

      <section className="about-section">
        <h1>About Me</h1>
        <p>
          Hello! I'm <strong>Htet Myark</strong>, a passionate web developer
          with a love for clean design and powerful code. I specialize in
          building modern, responsive web applications using{" "}
          <strong>React</strong>, <strong>JavaScript</strong>, and related
          technologies.
        </p>
      </section>

      <section className="about-card">
        <h2>Skills</h2>
        <ul className="pill-list">
          <li>🔧 JavaScript (ES6+)</li>
          <li>⚛️ React</li>
          <li>🎨 HTML5 / CSS3</li>
          <li>🖼️ UI/UX Design Basics</li>
          <li>🐘 PostgreSQL</li>
          <li>🐍 Python</li>
          <li>📦 Git & GitHub</li>
        </ul>
      </section>

      <section className="about-card">
        <h2>Quick Facts</h2>
        <ul className="pill-list">
          <li>🌏 Based in Singapore</li>
          <li>🎓 Year 3 student at Singapore Polytechnic</li>
          <li>💻 Specialized in Software Development</li>
          <li>💼 Open to internships & freelance</li>
          <li>
            📫{" "}
            <a href="mailto:htetmyark@gmail.com" className="email-link">
              Click to reach me out
            </a>
          </li>
        </ul>
      </section>

      <section className="about-card">
        <h2>Languages I Speak</h2>
        <ul className="pill-list">
          <li>🇬🇧 English – Fluent</li>
          <li>🇲🇲 Burmese – Native</li>
        </ul>
      </section>

      <section className="about-card">
        <h2>Certifications</h2>
        <div className="cert-grid">
          <div
            className="cert-card"
            onClick={() =>
              handleClick(
                "https://www.datacamp.com/completed/statement-of-accomplishment/course/6d7b96d2ea7d718f241525d86e336e3b779e64dc"
              )
            }
          >
            <h4>📘 Introduction to Linear Modeling in Python</h4>
            <p>Issued by DataCamp</p>
            <span className="view-certificate">View Certificate →</span>
          </div>

          <div
            className="cert-card"
            onClick={() =>
              handleClick(
                "https://www.datacamp.com/completed/statement-of-accomplishment/course/6007d7d6be7a3937217ded1a9824af25934ea8b3"
              )
            }
          >
            <h4>📘 Statistical Thinking in Python (Part 1)</h4>
            <p>Issued by DataCamp</p>
            <span className="view-certificate">View Certificate →</span>
          </div>

          <div
            className="cert-card"
            onClick={() =>
              handleClick(
                "https://www.datacamp.com/completed/statement-of-accomplishment/course/a19321c5edf1abdb632d80db864da7cc30602e5e"
              )
            }
          >
            <h4>📘 Statistical Thinking in Python (Part 2)</h4>
            <p>Issued by DataCamp</p>
            <span className="view-certificate">View Certificate →</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
