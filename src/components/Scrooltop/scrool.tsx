// components/ScrollToTopWithProgress.tsx
import React, { useEffect, useState } from "react";
import "./scrool.css";

const ScrollToTopWithProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const updateScroll = () => {
    const scrollTop = window.scrollY;
    const winHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / winHeight) * 100;
    setScrollPercent(scrolled);
    setIsVisible(scrollTop > 300); // Show only after scrolling 300px
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className={`scroll-progress-container ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <svg className="progress-ring" width="50" height="50">
        <circle
          className="progress-ring-circle"
          stroke="#FFA500"
          strokeWidth="4"
          fill="transparent"
          r="22"
          cx="25"
          cy="25"
          style={{
            strokeDasharray: `${2 * Math.PI * 22}`,
            strokeDashoffset: `${2 * Math.PI * 22 * (1 - scrollPercent / 100)}`,
          }}
        />
      </svg>
      <div className="arrow-up">↑</div>
    </div>
  );
};

export default ScrollToTopWithProgress;
