import React from 'react';
import './css/Contact.css';
import SolarSystem from '../components/solarBg';

function Contact() {
  return (
    <div className="contact-container">
      <SolarSystem />
      
      <h1>Let's Connect</h1>
      <p className="contact-text">
        Got a question, project idea, or just want to say hi? I'd love to hear from you!
      </p>
      
      <a href="mailto:htetmyark@gmail.com" className="email-button">
        📩 Email Me
      </a>

      
    </div>
  );
}

export default Contact;
