/* src/pages/Game.js */
import React, { useState, useEffect } from 'react';
import SafeOrUnsafe from '../components/SafeOrUnsafe';
import FeedbackBox from '../components/FeedbackBox';
import items from '../data/safeItems';

// --- New Shuffle Function ---
// This uses the Fisher-Yates algorithm to randomize the array order.
const shuffleArray = (array) => {
  let shuffled = [...array]; // Create a copy to avoid changing the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Game() {
  const [shuffledItems, setShuffledItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [score, setScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  // This effect runs once when the game starts
  useEffect(() => {
    setShuffledItems(shuffleArray(items));
    // Preload images for a smoother experience
    items.forEach(item => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  const handleAnswer = (userChoice) => {
    if (isAnswered) return; // Prevent multiple answers

    const currentItem = shuffledItems[currentItemIndex];
    const isCorrect = userChoice === currentItem.isSafe;

    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedback({ message: currentItem.explanation.correct, type: 'correct' });
    } else {
      setFeedback({ message: currentItem.explanation.incorrect, type: 'incorrect' });
    }
    
    setIsAnswered(true);

    setTimeout(() => {
      const nextItemIndex = currentItemIndex + 1;
      if (nextItemIndex < shuffledItems.length) {
        setCurrentItemIndex(nextItemIndex);
        setFeedback({ message: '', type: '' });
        setIsAnswered(false);
      } else {
        setIsGameFinished(true);
      }
    }, 2500);
  };

  const handlePlayAgain = () => {
    setShuffledItems(shuffleArray(items)); // Re-shuffle for the new game
    setCurrentItemIndex(0);
    setScore(0);
    setFeedback({ message: '', type: '' });
    setIsGameFinished(false);
    setIsAnswered(false);
  };

  if (shuffledItems.length === 0) {
    return <div className="page-content">Loading game...</div>;
  }

  if (isGameFinished) {
    return (
      <div className="game-over-screen card">
        <h2>Great Job!</h2>
        <p>You've completed the game.</p>
        <p className="final-score">Your Final Score: {score} out of {shuffledItems.length}</p>
        <button className="primary-button" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="game-header">
        <h2>Is it Safe?</h2>
        <p className="score">Score: {score}</p>
      </div>
      
      <SafeOrUnsafe 
        item={shuffledItems[currentItemIndex]} 
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
        Question {currentItemIndex + 1} of {shuffledItems.length}
      </div>
    </div>
  );
}

export default Game;
