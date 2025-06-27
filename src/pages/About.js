import React from 'react';
import './css/about.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p className="about-intro">
        Hello! I'm <strong>Htet Myark</strong>, a passionate web developer with a love for clean design and powerful code.
        I specialize in building modern, responsive web applications using <strong>React</strong>, <strong>JavaScript</strong>, and related technologies.
      </p>

      <h2>Skills</h2>
      <ul className="skills-list">
        <li>🔧 JavaScript (ES6+)</li>
        <li>⚛️ React & React Router</li>
        <li>🎨 HTML5 / CSS3</li>
        <li>🖼️ UI/UX Design Basics</li>
        <li>🐘 PostgreSQL & Firebase</li>
        <li>📦 Git & GitHub</li>
      </ul>

      <h2>Quick Facts</h2>
      <ul className="facts-list">
        <li>🌏 Based in Singapore</li>
        <li>🎓 Software Dev Student</li>
        <li>💼 Open to internships & freelance</li>
        <li>🎮 Loves building games with Godot</li>
      </ul>
    </div>
  );
}

export default About;
