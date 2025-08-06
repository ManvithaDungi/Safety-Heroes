import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackBox.css';

const FeedbackBox = ({ message, type }) => {
  // Return null if there's no message to prevent rendering an empty box
  if (!message) {
    return null;
  }

  return (
    <div 
      className={`feedback-box ${type}`}
      role="alert"
      aria-live="polite" // Announces the feedback to screen readers
    >
      <span className="feedback-icon" aria-hidden="true">
        {type === 'correct' ? '✅' : '❌'}
      </span>
      <p className="feedback-message">{message}</p>
    </div>
  );
};

FeedbackBox.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['correct', 'incorrect', '']).isRequired,
};

export default FeedbackBox;
