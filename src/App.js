// Import necessary components and libraries.
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Tips from './pages/Tips'; 
// Import the main stylesheet for the App component.
import './App.css';
// Import routing components from react-router-dom.
import { Routes, Route } from 'react-router-dom';

/**
 * The main application component.
 * It sets up the overall layout and routing for the application.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div className="App">
      {/* The navigation bar, which is present on all pages. */}
      <Navbar />
      {/* The main content area where page components are rendered based on the route. */}
      <main id="main-content">
        {/* The Routes component from react-router-dom defines the routing configuration. */}
        <Routes>
          {/* Route for the home page. */}
          <Route path="/" element={<Home />} />
          {/* Route for the game page. */}
          <Route path="/game" element={<Game />} />
          {/* Route for the tips page. */}
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </main>
    </div>
  );
}

// Export the App component to be used in other parts of the application, like index.js.
export default App;
// src/App.js