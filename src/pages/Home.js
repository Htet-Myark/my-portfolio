import React from 'react';
import './css/Home.css';
import profileImg from '../assets/profile.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="home-container">
      <div className="intro">
        <img src={profileImg} alt="Profile" className="profile-photo" />
        <h1>Hello, I'm Htet Myark</h1>
        <p>I'm a passionate developer building web apps with React and JavaScript.</p>
        <div className="social-icons">
          <a href="https://github.com/Htet-Myark" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          
        </div>
        <a href="/projects" className="cta-button">View My Work</a>
      </div>
    </div>
  );
}

export default Home;
