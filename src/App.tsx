import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Tips } from './pages/Tips';
import './index.css';

function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <GameProvider>
          <div className="min-h-screen bg-cream flex flex-col">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </GameProvider>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
