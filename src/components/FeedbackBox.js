import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackBox.css';

const FeedbackBox = ({ message, type }) => {
  // Do not render anything if message is empty
  if (!message?.trim()) {
    return null;
  }

  return (
    <div 
      className={`feedback-box ${type}`}
      role="alert"
      aria-live="polite" // Screen readers will announce this
    >
      <span className="feedback-icon" aria-hidden="true">
        {type === 'correct' ? '✅' : type === 'incorrect' ? '❌' : ''}
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
