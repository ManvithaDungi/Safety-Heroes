// src/App.js
// Creating Components using Props: Navbar, Home, Game, Tips, and PetCompanion are custom components being imported and used.
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Tips from './pages/Tips';
import PetCompanion from "./components/PetCompanion";
import ErrorBoundary from './components/ErrorBoundary';

import './App.css';
// Routing: Routes, Route, and useLocation are imported from react-router-dom to handle client-side routing.
import { Routes, Route, useLocation } from 'react-router-dom';
// State Management API: The GameProvider component is imported to provide context to its children.
import { GameProvider } from "./GameContext";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar />
        <main id="main-content">
          <GameProvider>
            <RoutesWrapper />
          </GameProvider>
        </main>
      </div>
    </ErrorBoundary>
  );
}

function RoutesWrapper() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/game' && <PetCompanion />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </>
  );
}

export default App; // Exporting component