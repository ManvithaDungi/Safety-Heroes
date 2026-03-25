// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import heroImage from '../images/hero.jpg';
import profileImage from '../images/profile.jpg';
import references from '../data/references.json';

function Home() {
  const [visibleConcepts, setVisibleConcepts] = useState(3);
  const [activeTab, setActiveTab] = useState('articles');

  // Scroll animation state
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reactConcepts = [
    { title: "Props", description: "Passed props to components like SafeOrUnsafe and FeedbackBox.", icon: "📦", level: "Beginner" },
    { title: "Creating Components with Props", description: "Functional components accept props to display dynamic content.", icon: "🧩", level: "Beginner" },
    { title: "Props Validation", description: "PropTypes used in SafeOrUnsafe.js and FeedbackBox.js.", icon: "✅", level: "Intermediate" },
    { title: "Event Management", description: "Click events handled with functions like handleAnswer in Game.js.", icon: "🎯", level: "Beginner" },
    { title: "State Management", description: "useState manages game state, current question index, and score.", icon: "🔄", level: "Intermediate" },
    { title: "Context API", description: "GameContext shares score, feedback, and selectedItems across components.", icon: "🌐", level: "Advanced" },
    { title: "Stateless Components", description: "Navbar.js and Tips.js are purely presentational.", icon: "🎨", level: "Beginner" },
    { title: "Hooks", description: "useState, useEffect, useContext used across the project.", icon: "🪝", level: "Intermediate" },
    { title: "Conditional Rendering", description: "Different UI shown depending on game state (loading, in-progress, or finished).", icon: "🔀", level: "Intermediate" },
    { title: "Lists & Keys", description: ".map() used for items in SafeOrUnsafe and Tips, with keys for performance.", icon: "📋", level: "Beginner" },
    { title: "Routing", description: "react-router-dom used for navigating between pages.", icon: "🛤️", level: "Intermediate" },
    { title: "Forms", description: "FeedbackBox has a controlled form input.", icon: "📝", level: "Beginner" },
    { title: "Pagination", description: "Tips.js uses MUI Pagination for showing tips.", icon: "📄", level: "Advanced" }
  ];

  /**
   * Returns a pastel color based on the concept difficulty level.
   * These colors are soft and provide good contrast with white text.
   */
  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return '#77DD77'; // Pastel Green
      case 'Intermediate': return '#FFB347'; // Pastel Orange
      case 'Advanced': return '#FF6961'; // Pastel Red
      default: return '#AEC6CF'; // Pastel Blue
    }
  };

  const showMoreConcepts = () => {
    setVisibleConcepts(prev => Math.min(prev + 3, reactConcepts.length));
  };

  return (
    <div className="home-container">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-shapes">
          <div className="shape shape-1" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
          <div className="shape shape-2" style={{ transform: `translateY(${scrollY * 0.15}px)` }}></div>
          <div className="shape shape-3" style={{ transform: `translateY(${scrollY * 0.08}px)` }}></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-gradient">Safe or Unsafe</span>
              <span className="title-subtitle">Interactive Learning Adventure</span>
            </h1>
            <p className="hero-description">
              Empowering children with autism to learn safety concepts through engaging, 
              accessible, and fun interactive experiences.
            </p>
            <Link to="/game" className="cta-button">
              <span className="cta-icon">🚀</span>
              Start Your Adventure
              <span className="cta-arrow">→</span>
            </Link>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <img src={heroImage} alt="Safety Hero Character" className="hero-image" />
              <div className="hero-decorations">
                <div className="decoration decoration-1">⭐</div>
                <div className="decoration decoration-2">🛡️</div>
                <div className="decoration decoration-3">🎯</div>
                <div className="decoration decoration-4">✨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="profile-card">
          <div className="profile-info">
            <img 
              src={profileImage}
              alt="Manvitha Dungi - Developer"
              className="profile-image"
              onError={(e) => {
                // Use inline SVG data URI instead of external service for better reliability
                const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect fill='%23F0E6FF' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='%235D6073' font-family='Lexend, sans-serif'%3EMD%3C/text%3E%3C/svg%3E`;
                e.target.src = placeholderSvg;
              }}
            />
            <div className="profile-details">
              <h3 className="profile-name">Manvitha Dungi</h3>
              <p className="profile-title">Full-Stack Developer</p>
              <p className="profile-description">
                Passionate about creating inclusive digital experiences that make technology 
                accessible and enjoyable for everyone, especially children with special needs.
              </p>
              <div className="profile-skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Accessibility</span>
                <span className="skill-tag">UX Design</span>
                <span className="skill-tag">Inclusive Design</span>
              </div>
            </div>
          </div>
          <a 
            href="https://manvithadungi.github.io/MyPortfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-button"
          >
            <span>View Portfolio</span>
            <span className="button-icon">🌟</span>
          </a>
        </div>
      </section>

      {/* React Concepts Section */}
      <section className="concepts-section">
        <div className="concepts-header">
          <h2 className="section-title">
            <span className="title-icon">⚛️</span>
            React Concepts Implemented
          </h2>
          <p className="section-subtitle">
            Exploring modern React patterns and best practices through practical implementation
          </p>
        </div>
        <div className="concepts-grid">
          {reactConcepts.slice(0, visibleConcepts).map((concept, index) => (
            <div key={index} className="concept-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="concept-header">
                <span className="concept-icon">{concept.icon}</span>
                <div className="concept-meta">
                  <h3 className="concept-title">{concept.title}</h3>
                  <span 
                    className="concept-level" 
                    style={{ backgroundColor: getLevelColor(concept.level) }}
                  >
                    {concept.level}
                  </span>
                </div>
              </div>
              <p className="concept-description">{concept.description}</p>
            </div>
          ))}
        </div>
        {visibleConcepts < reactConcepts.length && (
          <div className="load-more-container">
            <button className="load-more-button" onClick={showMoreConcepts}>
              <span>Show More Concepts</span>
              <span className="load-more-icon">↓</span>
            </button>
          </div>
        )}
      </section>

      {/* References Section */}
      <section className="references-section">
        <div className="references-header">
          <h2 className="section-title">
            <span className="title-icon">📚</span>
            Learning Resources
          </h2>
          <p className="section-subtitle">
            Curated resources about autism-friendly design and accessibility
          </p>
        </div>
        
        <div className="references-tabs">
          <button 
            className={`tab-button ${activeTab === 'articles' ? 'active' : ''}`}
            onClick={() => setActiveTab('articles')}
          >
            <span className="tab-icon">📄</span>
            Articles ({references.articles.length})
          </button>
          <button 
            className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <span className="tab-icon">🎥</span>
            Videos ({references.videos.length})
          </button>
        </div>

        <div className="references-content">
          <div className="references-grid">
            {references[activeTab].map((ref, index) => (
              <div key={index} className="reference-card">
                <div className="reference-header">
                  <span className="reference-icon">
                    {activeTab === 'articles' ? '📖' : '🎬'}
                  </span>
                  <h3 className="reference-title">{ref.title}</h3>
                </div>
                <p className="reference-description">{ref.description}</p>
                <a 
                  href={ref.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="reference-link"
                >
                  <span>Explore Resource</span>
                  <span className="link-arrow">↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;