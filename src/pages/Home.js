//src
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// ✅ Static image imports from src/images
import heroImage from '../images/hero.jpg';
import profileImage from '../images/profile.jpg';

function Home() {
  return (
    <div className="home-container">
      {/* Main welcome scene */}
      <section className="hero-section">
        <div className="hero-illustration">
          <img 
            src={heroImage} 
            alt="A friendly cartoon hero character" 
          />
        </div>
        <div className="hero-text">
          <h2 className="hero-title">Become a Safety Hero!</h2>
          <p className="hero-subtitle">Learn all about staying safe in this fun adventure game.</p>
          <Link to="/game">
            <button className="hero-button">Start the Game</button>
          </Link>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="creator-section">
        <div className="creator-card">
          <img 
            src={profileImage}
            alt="Manvitha Dungi"
            className="creator-picture"
            onError={(e) => { 
              e.target.src = 'https://placehold.co/150x150/F0E6FF/5D6073?text=You'; 
            }}
          />
          <div className="creator-info">
            <h3 className="creator-name">Manvitha Dungi</h3>
            <p className="creator-bio">Hi, I'm Manvitha Dungi, a passionate developer creating fun and accessible web experiences as part of my Fullstack frameworks course evaluation.</p>
            <a 
              href="https://manvithadungi.github.io/MyPortfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="creator-button"
            >
              View My Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
