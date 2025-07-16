import React from 'react';
import './css/Footer.css'; // You can style it with your own CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Htet Myark</p>
        <p>
          Built with ❤️ using React.{' '}
          <a href="https://github.com/Htet-Myark/my-portfolio" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
