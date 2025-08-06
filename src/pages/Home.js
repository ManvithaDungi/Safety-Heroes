// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // We'll add some new styles

function Home() {
  return (
    <>
      {/* Original Welcome Card */}
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Welcome to Safety Heroes!</h2>
        <p>This is a fun game to help you learn about what's safe and what's not.</p>
        <p>Are you ready to become a Safety Hero?</p>
        <Link to="/game">
          <button className="primary-button">Start the Game</button>
        </Link>
      </div>

      {/* New Portfolio Section */}
      <div className="portfolio-card">
        <img 
          src="/assets/profile.jpeg" // IMPORTANT: Place your photo in the public/assets folder
          alt="Your Name" 
          className="portfolio-picture"
          onError={(e) => { e.target.src = 'https://placehold.co/150x150/F0E6FF/5D6073?text=You'; }} // Fallback placeholder
        />
        <h3 className="portfolio-name">Your Name</h3>
        <p className="portfolio-bio">A passionate developer creating fun and accessible web experiences.</p>
        <a 
          href="https://manvithadungi.github.io/MyPortfolio" // IMPORTANT: Replace with your actual portfolio URL
          target="_blank" 
          rel="noopener noreferrer" 
          className="portfolio-button"
        >
          View My Portfolio
        </a>
      </div>
    </>
  );
}

export default Home;
