// src/components/SafeOrUnsafe.js
import React from 'react';
import PropTypes from 'prop-types';
import './SafeOrUnsafe.css';

// SVG Icon for a checkmark
const SafeIcon = () => (
  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// SVG Icon for a warning sign
const UnsafeIcon = () => (
  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);


function SafeOrUnsafe({ item, onAnswer, isAnswered }) {
  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/250x250/E6E6FA/7A7D96?text=Image+Missing';
    console.warn(`Failed to load image for ${item.name} at ${item.image}`);
  };

  return (
    <div className="safety-card" role="region" aria-labelledby="question-heading">
      <img 
        src={item.image} 
        alt={item.name} 
        className="safety-image"
        onError={handleImageError}
      />
      <h3 id="question-heading" className="safety-question">{item.question}</h3>
      <div className="safety-buttons">
        <button 
          className="btn btn-safe"
          onClick={() => onAnswer(true)}
          disabled={isAnswered}
          aria-label="Mark as safe"
        >
          <SafeIcon /> Safe
        </button>
        <button 
          className="btn btn-unsafe"
          onClick={() => onAnswer(false)}
          disabled={isAnswered}
          aria-label="Mark as unsafe"
        >
          <UnsafeIcon /> Unsafe
        </button>
      </div>
    </div>
  );
}

SafeOrUnsafe.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default SafeOrUnsafe;
