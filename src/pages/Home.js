import React from 'react';
import './css/Home.css';
import profileImg from '../assets/profile.png';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SolarSystem from '../components/solarBg';




function Home() {
  

 

  

  return (
    <div className="home-page">
      <SolarSystem />
      {/* Section 1: Profile */}
      <section className="section profile-section">
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
          {/* <a href="/projects" className="cta-button">View My Work</a> */}
          <NavLink to="/projects" className="cta-button" activeclassname="active">View My work</NavLink>
        </div>
      </section>

      
    </div>
  );
}

export default Home;
