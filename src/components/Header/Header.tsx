import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-header">
        <div className="container">
          <div className="logo-area">
            <div className="log">
              <img src="/src/assets/images/logo/logo-01.png" alt="DRILL" />
            </div>
          </div>
          
          <div className="header-info">
            <div className="info-item">
              <div className="icon">
                <i className="far fa-clock"></i>
              </div>
              <div className="text">
                <span className="label">24/7 Service Alltime</span>
                <span className="value">Mon (to) Sun: 9:00-5:00</span>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="text">
                <span className="label">Company Location</span>
                <span className="value">16 Berlin, Germany</span>
              </div>
            </div>
            
            <a href="#quote" className="quote-btn">
              Request Quote
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="mobile-controls">
            <button 
              className="search-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <i className="fas fa-search"></i>
            </button>
            <button 
              className="top-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="main-header">
        <div className="nav-container">
          <nav className="main-nav">
            <div className="container">
              <ul className="nav-links">
                <li><a href="/" className="active">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li><a href="#blog">BLOG</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>

              <div className="nav-right">
                <button 
                  className="search-btn"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <i className="fas fa-search"></i>
                </button>
                <button 
                  className="menu-btn"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <button 
            className="close-menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>

          <nav className="mobile-nav">
            <ul className="mobile-nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>

          <div className="mobile-social-links">
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div 
        className={`backdrop-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Desktop Menu Overlay */}
      <div className={`desktop-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="desktop-menu-content">
          <button 
            className="close-desktop-menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>

          <div className="menu-content">
            <div className="menu-image-section">
              <img src="/src/assets/images/banner/04.jpg" alt="Handyman" className="menu-image" />
            </div>
            
            <div className="menu-text-section">
              <h2>We Build Building and Great Constructive Homes.</h2>
              <p>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.</p>
            </div>

            <div className="menu-divider"></div>

            <div className="menu-project">
              <h3>Got a project in mind?</h3>
              <a href="#quote" className="menu-quote-btn">
                Let's talk
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div className={`search-overlay ${isSearchOpen ? 'active' : ''}`}>
        <div className="search-content">
          <div className="container">
            <form className="search-form">
              <input 
                type="text" 
                placeholder="Search by keyword or #"
                className="search-input"
              />
              <button type="submit" className="search-submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <button 
            className="close-search"
            onClick={() => setIsSearchOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 