import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="top-footer">
          <div className="logo-section">
            <img src="/src/assets/images/logo/logo-02.png" alt="DRILL" />
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div className="text">
                <span className="label">Phone Number</span>
                <a href="tel:(+202) 2156-2145" className="value">(+202) 2156-2145</a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div className="text">
                <span className="label">Email Us Here</span>
                <a href="mailto:info@dyer.com" className="value">info@dyer.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-location-dot"></i>
              <div className="text">
                <span className="label">Office Address</span>
                <span className="value">251 Hilton, Berlin DE</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-content">
          <div className="footer-container">
            <div className="footer-column">
              <h3>
              About Company
                
              </h3>
              <p>Centric applications productive before front end vertals visualize front end results and value added.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Gallery</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>What We Do</h3>
              <ul>
                <li><a href="#">Our Service</a></li>
                <li><a href="#">Office Service</a></li>
                <li><a href="#">Industry Service</a></li>
                <li><a href="#">Private Service</a></li>
                <li><a href="#">Single Service</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Photo Gallery</h3>
              <div className="gallery-grid">
                <img src="/src/assets/images/footer/gallery/01.png" alt="Gallery" />
                <img src="/src/assets/images/footer/gallery/02.png" alt="Gallery" />
                <img src="/src/assets/images/footer/gallery/03.png" alt="Gallery" />
                <img src="/src/assets/images/footer/gallery/04.png" alt="Gallery" />
                <img src="/src/assets/images/footer/gallery/05.png" alt="Gallery" />
                <img src="/src/assets/images/footer/gallery/06.png" alt="Gallery" />
              </div>
            </div>
          </div>
          
          <div className="copyright">
            Copyright 2023. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







