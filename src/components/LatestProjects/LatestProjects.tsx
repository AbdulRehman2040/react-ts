import React, { useState, useEffect } from 'react';
import './LatestProjects.css';

const LatestProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(20);

  const projects = [
    {
      image: "/src/assets/images/project/01.jpg",
      title: "Roof Construction",
      category: "Construction"
    },
    
    {
      image: "/src/assets/images/project/02.jpg",
      title: "Plumbing Service",
      category: "Plumbing"
    },
    {
      image: "/src/assets/images/project/01.jpg",
      title: "Roof Construction",
      category: "Construction"
    },
    {
      image: "/src/assets/images/project/03.jpg",
      title: "Kitchen Repair",
      category: "Repair"
    },
    {
      image: "/src/assets/images/project/04.jpg",
      title: "Construction Work",
      category: "Construction"
    },
    {
      image: "/src/assets/images/project/05.jpg",
      title: "AC Maintenance",
      category: "Maintenance"
    }
  ];

  const getVisibleItems = () => {
    const width = window.innerWidth;
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    if (width <= 992) return 3;
    if (width <= 1200) return 4;
    return 5;
  };

  const updateSlideWidth = () => {
    const width = window.innerWidth;
    if (width <= 480) setSlideWidth(100);
    else if (width <= 768) setSlideWidth(50);
    else if (width <= 992) setSlideWidth(33.333);
    else if (width <= 1200) setSlideWidth(25);
    else setSlideWidth(20);
  };

  useEffect(() => {
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const visibleItems = getVisibleItems();
      const maxIndex = Math.max(0, projects.length - visibleItems);
      return Math.min(prevIndex + 1, maxIndex);
    });
  };

  return (
    <section className="latest-projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="header-content">
            <span className="tag">FEEL FREE TO CONTACT US</span>
            <h2>Stunning Our Latest <span>Projects</span></h2>
          </div>
          <div className="navigation-arrows">
            <button 
              className="nav-arrow prev" 
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              ←
            </button>
            <button 
              className="nav-arrow next"
              onClick={handleNext}
              disabled={currentIndex >= projects.length - getVisibleItems()}
            >
              →
            </button>
          </div>
        </div>
        
        <div className="projects-gallery">
          <div 
            className="projects-track"
            style={{
              transform: `translateX(-${currentIndex * slideWidth}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
                      <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;








