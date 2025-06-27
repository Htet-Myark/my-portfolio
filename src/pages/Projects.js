import React from 'react';
import './css/Projects.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal site built with React to showcase my work.',
    link: 'https://github.com/your-username/portfolio'
  },
  {
    title: 'Todo App',
    description: 'A simple task manager using React and localStorage.',
    link: 'https://github.com/your-username/todo-app'
  },
  {
    title: 'Weather Dashboard',
    description: 'React + OpenWeather API to show weather by location.',
    link: 'https://github.com/your-username/weather-dashboard'
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
