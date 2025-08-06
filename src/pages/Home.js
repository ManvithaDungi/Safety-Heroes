// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Welcome to Safety Heroes!</h2>
      <p>This is a fun game to help you learn about what's safe and what's not.</p>
      <p>Are you ready to become a Safety Hero?</p>
      <Link to="/game">
        <button className="primary-button">Start the Game</button>
      </Link>
    </div>
  );
}

export default Home;
