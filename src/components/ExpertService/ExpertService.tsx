import React from 'react';
import './ExpertService.css';

const ExpertService: React.FC = () => {
  return (
    <section className="expert-service">
      <div className="expert-container">
        <div className="expert-wrapper">
          <div className="expert-image-container">
            <div className="main-image">
              <img src="/src/assets/images/solution/01.jpg" alt="Two plumbers discussing work" />
            </div>
            <div className="floating-image">
              <img src="/src/assets/images/solution/02.jpg" alt="Plumber at work" />
            </div>
          </div>
          
          <div className="expert-content">
            <div className="label-container">
              <span className="orange-label">FEEL FREE</span>
              <span className="text-label">TO CONTACT US</span>
            </div>
            
            <h2 className="expert-title">
              We are Expert in All
              <span className="highlight">Plumber Solution</span>
            </h2>
            
            <p className="expert-description">
              These tools will allow you to handle tasks hanging shelves assemble furniture, 
              and making basic repairs around the house. additional you may want to 
              invest in specialized tools for specific tasks.
            </p>
            
            <div className="features">
              <div className="feature-item">
                <div className="dot-container">
                  <span className="dot"></span>
                </div>
                <span className="feature-text">Reliable Repairs</span>
              </div>
              <div className="feature-item">
                <div className="dot-container">
                  <span className="dot"></span>
                </div>
                <span className="feature-text">Reliable Repairs</span>
              </div>
              <div className="feature-item">
                <div className="dot-container">
                  <span className="dot"></span>
                </div>
                <span className="feature-text">Absolute Works</span>
              </div>
              <div className="feature-item">
                <div className="dot-container">
                  <span className="dot"></span>
                </div>
                <span className="feature-text">Standard Work</span>
              </div>
            </div>
            
            <div className="cta-container">
              <button className="quote-btn2">
                Read More
                <span className="arrow">→</span>
              </button>
              
              <div className="contact-info2">
                <div className="phone-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#FF6B00"/>
                    <path d="M16.3132 14.9989C15.8532 14.9989 15.4041 14.9099 14.9832 14.7319C14.7823 14.6429 14.5432 14.6909 14.3805 14.8536L13.3068 15.9273C11.6995 15.1172 10.8768 14.2945 10.0759 12.6964L11.1405 11.6227C11.3032 11.46 11.3512 11.2209 11.2623 11.02C11.0843 10.5991 10.9953 10.15 10.9953 9.69C10.9953 9.30909 10.6864 9 10.3055 9H8.68977C8.30886 9 7.99977 9.30909 7.99977 9.69C7.99977 13.6655 11.2377 17 15.2132 17C15.5941 17 15.9032 16.6909 15.9032 16.31V14.6943C15.9032 14.3134 15.5941 14.0043 15.2132 14.0043L16.3132 14.9989Z" fill="white"/>
                  </svg>
                </div>
                <div className="contact-text-container">
                  <span className="contact-label">Call Us 24/7</span>
                  <span className="phone-number">(+25) 2158.2693</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertService;




