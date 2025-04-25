import React from 'react';
import './InsideStory.css';

interface StoryCard {
  date: string;
  category: string;
  title: string;
  image: string;
}

const InsideStory: React.FC = () => {
  const stories: StoryCard[] = [
    {
      date: "March 15, 2022",
      category: "Clean Service",
      title: "This will give you peace mind knowing that if something",
      image: "/src/assets/images/blog/01.jpg"
    },
    {
      date: "March 15, 2022",
      category: "Clean Service",
      title: "He has give you peace mind knowing that if more",
      image: "/src/assets/images/blog/02.jpg"
    },
    {
      date: "March 15, 2022",
      category: "Clean Service",
      title: "Latest will give you peace mind knowing that if Nothing",
      image: "/src/assets/images/blog/03.jpg"
    }
  ];

  return (
    <section className="inside-story">
      <div className="story-container">
        <div className="story-header">
          <div className="quality-label">
            <span className="orange-bg">QUALITY HANDYMAN</span>
            <span className="white-text">SOLUTION</span>
          </div>
          
        </div>
        <h2 className='story-title'>Inside Story Of Our Company</h2>
        <div className="story-grid">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-image">
                <img src={story.image} alt={story.title} />
              </div>
              <div className="story-content">
                <div className="story-meta">
                  <div className="meta-item">
                    <i className="far fa-calendar"></i>
                    {story.date}
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-tag"></i>
                    {story.category}
                  </div>
                </div>
                <h3>{story.title}</h3>
                <div className="read-more-wrapper">
                  <a href="#" className="read-more">
                    Read Details
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsideStory;
