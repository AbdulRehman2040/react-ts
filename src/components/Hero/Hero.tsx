import React, { useState, useEffect } from 'react';
import './Hero.css';

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    {
      title: "Sustainable",
      subtitle: "Electric Solution",
      description: "Take payments online with a scalable platform that grows with your perfect business imperdiet ad quis eu leo varius id odio urna",
      image: "/src/assets/images/bg/01.webp"
    },
    {
      title: "Professional",
      subtitle: "Plumber Solution",
      description: "Expert plumbing services for all your needs, from repairs to installations. Quality work guaranteed with attention to detail.",
      image: "/src/assets/images/bg/bg-image-2.jpg"
    },
    {
      title: "Reliable",
      subtitle: "Handyman Solution",
      description: "Comprehensive handyman services for residential and commercial properties. Safe, efficient, and modern solutions.",
      image: "/src/assets/images/bg/bg-image-1.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero">
      <button className="nav-button prev" onClick={handlePrevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="nav-button next" onClick={handleNextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="container">
              <div className="slide-content">
                <div className="quality-label">
                  <span className="orange">QUALITY HANDYMAN</span>
                  <span className="">SOLUTION</span>
                </div>
                <h1>
                  <span className="title">{slide.title}</span>
                  <span className="subtitle">{slide.subtitle}</span>
                </h1>
                <p>{slide.description}</p>
                <button className="quote-btn">
                  Request Quote
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 