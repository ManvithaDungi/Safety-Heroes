// src/components/SafeOrUnsafe.js
import React from 'react';
import PropTypes from 'prop-types';

function SafeOrUnsafe({ item, onAnswer }) {
  const handleImageError = (e) => {
    e.target.src = '/images/placeholder.png';
    console.warn(`Failed to load image for ${item.name}`);
  };

  return (
    <div className="safety-card" role="region" aria-label="safety question">
      <img 
        src={item.image} 
        alt={item.name} 
        className="safety-image"
        onError={handleImageError}
      />
      <h3 className="safety-question">{item.question}</h3>
      <div className="safety-buttons">
        <button 
          className="btn btn-safe"
          onClick={() => onAnswer(true)}
          aria-label="Mark as safe"
        >
          ✅ Safe
        </button>
        <button 
          className="btn btn-unsafe"
          onClick={() => onAnswer(false)}
          aria-label="Mark as unsafe"
        >
          ⚠️ Unsafe
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
  onAnswer: PropTypes.func.isRequired
};

export default SafeOrUnsafe;