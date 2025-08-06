import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Tips from './pages/Tips';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
// src/App.js