// src/pages/Game.js
import React, { useState, useEffect } from 'react';
import SafeOrUnsafe from '../components/SafeOrUnsafe';
import FeedbackBox from '../components/FeedbackBox';
import items from '../data/safeItems';

function Game() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [score, setScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  // Preload images for a smoother experience
  useEffect(() => {
    items.forEach(item => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  const handleAnswer = (userChoice) => {
    if (isAnswered) return; // Prevent multiple answers

    const currentItem = items[currentItemIndex];
    const isCorrect = userChoice === currentItem.isSafe;

    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedback({ message: currentItem.explanation.correct, type: 'correct' });
    } else {
      setFeedback({ message: currentItem.explanation.incorrect, type: 'incorrect' });
    }
    
    setIsAnswered(true);

    // Wait for the user to read the feedback, then move to the next item or end the game
    setTimeout(() => {
      const nextItemIndex = currentItemIndex + 1;
      if (nextItemIndex < items.length) {
        setCurrentItemIndex(nextItemIndex);
        setFeedback({ message: '', type: '' }); // Clear feedback
        setIsAnswered(false);
      } else {
        setIsGameFinished(true);
      }
    }, 2500); // Increased time to allow for reading the detailed feedback
  };

  const handlePlayAgain = () => {
    setCurrentItemIndex(0);
    setScore(0);
    setFeedback({ message: '', type: '' });
    setIsGameFinished(false);
    setIsAnswered(false);
  };

  if (isGameFinished) {
    return (
      <div className="game-over-screen card">
        <h2>Great Job!</h2>
        <p>You've completed the game.</p>
        <p className="final-score">Your Final Score: {score} out of {items.length}</p>
        <button className="primary-button" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return <div className="page-content">Loading game...</div>;
  }

  return (
    <div>
      <div className="game-header">
        <h2>Is it Safe?</h2>
        <p className="score">Score: {score}</p>
      </div>
      
      <SafeOrUnsafe 
        item={items[currentItemIndex]} 
        onAnswer={handleAnswer} 
        isAnswered={isAnswered}
      />
      
      {feedback.message && (
        <FeedbackBox 
          message={feedback.message}
          type={feedback.type}
        />
      )}
      
      <div className="progress">
        Question {currentItemIndex + 1} of {items.length}
      </div>
    </div>
  );
}

export default Game;
