import React from 'react';
import './PremiumService.css';

const PremiumService: React.FC = () => {
  return (
    <section className="premium-service">
      <div className="premium-overlay"></div>
      <div className="premium-container">
        <div className="premium-wrapper">
          <div className="premium-content">
            <div className="premium-label">
              <span className="free-text">FEEL FREE</span>
              <span className="contact-text">TO CONTACT US</span>
            </div>
            <h2 className="premium-title">
              Get Premium Handyman<br />
              Service From Us!
            </h2>
          </div>
          <div className="premium-buttons">
            <button className="quote-btn1">Get Our Service</button>
            <button className="contact-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumService;

