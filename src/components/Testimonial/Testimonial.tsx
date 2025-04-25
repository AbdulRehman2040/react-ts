import React from 'react';
import './Testimonial.css';

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Left Stats */}
        <div className="stats-area">
          <div className="stat-item">
            <div className="stat">200+</div>
            <div className="stat-title">Handyman Solution</div>
            <div className="stat-description">
              Viamus quisque lobortis plarat imperdiet class eros
            </div>
          </div>

          <div className="stat-item">
            <div className="stat">1.5m+</div>
            <div className="stat-title">Happy Customers</div>
            <div className="stat-description">
              Vivamus quisque lobortis placerat imperdiet class eros neque 
              duisator mollis porttitor
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="content-area">
          <div className="tag-wrapper">
            <span className="orange-tag">OUR CUSTOMERS</span>
            <span className="testimonial-tag">TESTIMONIAL</span>
          </div>

          <h2>Highest Rated Company</h2>
          <p>
            Dui maecenas tempus laoreet nec nullam fringilla luctusol eros 
            quam pellentesque cras dictum fermentum, convallis eu egestas 
            velit netus dictumat.
          </p>

          <div className="rating-box">
            <div className="rating">4.9/5</div>
            <div className="rating-text">
              <div className="rating-title">Trust Score Rated</div>
              <div className="rating-subtitle">Rated by over 5000 customers</div>
            </div>
          </div>

          <a href="#" className="review-link">View All Review</a>
        </div>

        {/* Right Image */}
        <div className="image-area">
          <div className="image-circle">
            <img src="/src/assets/images/solution/04.png" alt="Customer testimonial" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;




