// src/components/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Safety Heroes</h1>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/tips">Tips</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;