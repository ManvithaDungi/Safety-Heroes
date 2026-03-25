import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-bg-secondary shadow-soft-md">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo - Text-based instead of emoji */}
        <Link 
          to="/" 
          className="flex items-center gap-3 hover:opacity-80 smooth-transition focus-visible:rounded-lg"
          aria-label="Safety Heroes home"
        >
          <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center font-nunito font-bold text-lg text-text-primary">
            SH
          </div>
          <span className="font-nunito font-bold text-xl text-text-primary hidden sm:inline">
            Safety Heroes
          </span>
        </Link>

        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-soft focus:text-text-primary focus:font-bold">
          Skip to main content
        </a>

        {/* Navigation Links */}
        <div className="flex gap-2">
          {[
            { path: '/', label: 'Home' },
            { path: '/game', label: 'Game' },
            { path: '/tips', label: 'Tips' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-2 rounded-2xl font-quicksand font-semibold text-sm md:text-base smooth-transition ${
                isActive(path)
                  ? 'bg-primary-soft text-text-primary shadow-soft-md'
                  : 'text-text-secondary hover:bg-bg-primary hover:text-text-primary'
              }`}
              aria-current={isActive(path) ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
