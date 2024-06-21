import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="https://www.aam.org.es/" target="_blank" rel="noopener noreferrer">
        <img src="/dos.png" alt="AAM Logo" className="logo" />
      </a>
      <a href="https://www.nasa.gov/es/" target="_blank" rel="noopener noreferrer">
        <img src="/lucas.png" alt="NASA Logo" className="logo" />
      </a>
      <a href="https://planetmad.es/" target="_blank" rel="noopener noreferrer">
        <img src="/nasa4.png" alt="Planetmad Logo" className="logo" />
      </a>
      <a href="https://fitandfood.es/" target="_blank" rel="noopener noreferrer">
        <img src="/salle.png" alt="Fit and Food Logo" className="logo" />
      </a>
    </div>
  );
};

export default Footer;

