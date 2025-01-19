import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './social.css';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.facebook.com/caps.christuniversity/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
      </a>
      <a href="https://www.instagram.com/caps.kengeri/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/company/caps-centre-for-academic-and-professional-support/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
      </a>
    </div>
  );
}

export default SocialLinks;
