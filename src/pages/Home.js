// src/pages/Home.js
import React from 'react'; // React import for building components
import { Link } from 'react-router-dom'; // routing
import './Home.css';

import heroImage from '../images/hero.jpg'; // static asset
import profileImage from '../images/profile.jpg'; // static asset

// stateless functional component (no state or hooks used)
function Home() {
  return (
    <div className="home-container"> {/* layout */}
      <section className="hero-profile-section">
        
        {/* Left Card: Hero Section */}
        <div className="info-card">
          <img 
            src={heroImage} 
            alt="Cartoon safety hero" 
            className="card-image"
          />
          <h2 className="card-title">Become a Safety Hero!</h2>
          <p className="card-text">
            Learn all about staying safe in this fun adventure game.
          </p>
          <Link to="/game"> {/* routing: Link for navigation */}
            <button className="card-button">Start the Game</button>
          </Link>
        </div>

        {/* Right Card: Creator Profile */}
        <div className="info-card">
          <img 
            src={profileImage}
            alt="Manvitha Dungi"
            className="card-image"
            onError={(e) => {  // event management: handle image load error
              e.target.src = 'https://placehold.co/150x150/F0E6FF/5D6073?text=You'; 
            }}
          />
          <h3 className="card-title">Manvitha Dungi</h3>
          <p className="card-text">
            Hi, I'm Manvitha Dungi, a passionate developer creating fun and accessible web experiences as part of my Fullstack frameworks course evaluation.
          </p>
          <a 
            href="https://manvithadungi.github.io/MyPortfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            View My Portfolio
          </a>
        </div>
      </section>

      {/* Third Card: Use Case Description */}
      <section className="description-card">
        <h2 className="card-title">Use Case Description</h2>
        <p className="card-text">
          <strong>"Safe or Unsafe" – An Educational Website for Children with Autism</strong><br /><br />
          "Safe or Unsafe" is an interactive and visually calming educational website designed to help children with autism learn to identify safe and unsafe situations in a fun, engaging, and non-overwhelming way.
        </p>
        <p className="card-text">
          The platform features:
        </p>
        <ul className="card-list"> {/* lists */}
          <li>Home Page – A welcoming introduction to the game and its purpose.</li>
          <li>Game Page – An interactive activity where kids choose whether items or actions are safe or unsafe.</li>
          <li>Feedback System – Positive, encouraging messages and visuals to reinforce correct answers and guide learning.</li>
          <li>Accessible Design – Calming colors, clear fonts, and minimal distractions for a sensory-friendly experience.</li>
        </ul>
        <p className="card-text">
          Our goal is to help children build awareness, confidence, and decision-making skills while ensuring a safe and supportive online learning environment.
        </p>
      </section>
    </div>
  );
}

export default Home;
// src/pages/Home.js