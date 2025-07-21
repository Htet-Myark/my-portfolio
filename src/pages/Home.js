import React from 'react';
import './css/Home.css';
import profileImg from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import SolarSystem from '../components/solarBg';
import Projects from './Projects';
import About from './About';
import Contact from './Contacts';
import Footer from '../components/Footer'; // if you created it

function Home() {
  return (
    <div className="home-page">
      <SolarSystem />

     
      <section id="home" className="section profile-section">
        <div className="intro">
          <img src={profileImg} alt="Profile" className="profile-photo" />
          <h3>Hello, I'm Htet Myark Aung</h3>
          <p>I'm a passionate developer building web apps with React and JavaScript.</p>
          <div className="social-icons">
            <a href="https://github.com/Htet-Myark" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>

      {/* === About Section === */}
      <section id="about" className="section">
        <About />
      </section>

      {/* === Projects Section === */}
      <section id="projects" className="section">
        <Projects />
      </section>

      {/* === Contact Section === */}
      <section id="contact" className="section">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
