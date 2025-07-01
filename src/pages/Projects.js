import React from 'react';
import './css/Projects.css';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faPython
} from '@fortawesome/free-brands-svg-icons';
import { faNetworkWired, faWindowRestore } from '@fortawesome/free-solid-svg-icons';

// Helper: return icon + label
const getIcon = (stack) => {
  switch (stack) {
    case 'react':
      return { icon: faReact, label: 'React' };
    case 'js':
      return { icon: faJsSquare, label: 'JavaScript' };
    case 'css':
      return { icon: faCss3Alt, label: 'CSS' };
    case 'python':
      return { icon: faPython, label: 'Python' };
    case 'tkinter':
      return { icon: faWindowRestore, label: 'Tkinter' };
    case 'api':
      return { icon: faNetworkWired, label: 'API' };
    default:
      return { icon: null, label: stack };
  }
};

// Project list
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal site built with React to showcase my work.',
    link: 'https://github.com/your-username/portfolio',
    techstacks: ['react', 'js', 'css']
  },
  {
    title: 'Calculator App',
    description: 'A basic calculator like IOS.',
    link: 'https://github.com/your-username/todo-app',
    techstacks: ['react', 'js', 'css']
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather app that fetches data from a public API to display current weather conditions.',
    link: 'https://github.com/Htet-Myark/Python-weather-app',
    techstacks: ['python', 'tkinter', 'api']
  }
];

// Component
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
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="card-top">
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>

            <div className="tech-section">
              <div className="tech-icons">
                {proj.techstacks.map((stack, i) => {
                  const { icon, label } = getIcon(stack);
                  return (
                    <div key={i} className="tech-icon">
                      <FontAwesomeIcon icon={icon} title={label} />
                      <div className="tech-label">{label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
