import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-grid">
          <div className="image-main">
            <img src="/src/assets/images/about/01.jpg" alt="Handyman with tools" />
            <div className="experience-badge">
              <span className="experience-number">25</span>
              <span className="experience-text">Years Of Experience</span>
            </div>
          </div>
        </div>
        <div className="about-content">
          <div className="quality-label">
            <span className="orange-bg1">QUALITY HANDYMAN</span>
            <span className="solution-text">SOLUTION</span>
          </div>
          <h2 className="section-title">
            A Company That Change<br />
            And Solve your All Kind Of<br />
            <span className="highlight1">Handyman Solutions</span>
          </h2>
          <p className="about-description">
          Phasellus torquent neque volutpat dictumst tellus ultricies taciti interdum fusce, tortor ridiculus sociis cum at ultrices aliquet pulvinar nulla erat, senectus imperdiet sollicitudin lacus lacinia id a facilisi. Nam dictumst conubia natoque rhoncus enim tristique curae volutpat orci, tortor blandit eleifend clas
          </p>
          <button className="quote-btn">Request Quote →</button>
        </div>
      </div>
    </section>
  );
};

export default About;



