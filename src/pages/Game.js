/* src/pages/Game.js */
import React, { useState, useEffect } from 'react'; // importing React and hooks for state & lifecycle
import SafeOrUnsafe from '../components/SafeOrUnsafe'; // child component for each question
import FeedbackBox from '../components/FeedbackBox';   // child component for showing correct/incorrect feedback
import items from '../data/safeItems'; // static data array

// --- Shuffle Function ---
// Fisher–Yates algorithm: shuffles items so each game order is random
const shuffleArray = (array) => {
  let shuffled = [...array]; // spread operator: make a copy to avoid mutating original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap elements
  }
  return shuffled;
};

function Game() {
  // --- State hooks ---
  const [shuffledItems, setShuffledItems] = useState([]); // stores randomized list
  const [currentItemIndex, setCurrentItemIndex] = useState(0); // current question index
  const [feedback, setFeedback] = useState({ message: '', type: '' }); // feedback text + style type
  const [score, setScore] = useState(0); // number of correct answers
  const [isGameFinished, setIsGameFinished] = useState(false); // game end flag
  const [isAnswered, setIsAnswered] = useState(false); // prevents multiple answers per question

  // --- Effect hook ---
  // Runs once on mount to shuffle questions and preload images
  useEffect(() => {
    setShuffledItems(shuffleArray(items)); // initialize shuffled questions
    // preload images for smoother gameplay
    items.forEach(item => {
      const img = new Image();
      img.src = item.image;
    });
  }, []); // empty dependency array = run only once

  // --- Handle user answer ---
  const handleAnswer = (userChoice) => {
    if (isAnswered) return; // ignore clicks after first answer for this question

    const currentItem = shuffledItems[currentItemIndex];
    const isCorrect = userChoice === currentItem.isSafe; // boolean comparison

    if (isCorrect) {
      setScore(prev => prev + 1); // increment score
      setFeedback({ message: currentItem.explanation.correct, type: 'correct' });
    } else {
      setFeedback({ message: currentItem.explanation.incorrect, type: 'incorrect' });
    }
    
    setIsAnswered(true);

    // Delay before moving to next question or ending game
    setTimeout(() => {
      const nextItemIndex = currentItemIndex + 1;
      if (nextItemIndex < shuffledItems.length) {
        setCurrentItemIndex(nextItemIndex); // next question
        setFeedback({ message: '', type: '' });
        setIsAnswered(false);
      } else {
        setIsGameFinished(true); // no more questions → end game
      }
    }, 2500); // wait 2.5s so player sees feedback
  };

  // --- Restart game ---
  const handlePlayAgain = () => {
    setShuffledItems(shuffleArray(items)); // re-randomize
    setCurrentItemIndex(0);
    setScore(0);
    setFeedback({ message: '', type: '' });
    setIsGameFinished(false);
    setIsAnswered(false);
  };

  // --- Conditional rendering ---
  if (shuffledItems.length === 0) {
    return <div className="page-content">Loading game...</div>; // initial load state
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

  // --- Main game UI ---
  return (
    <div>
      <div className="game-header">
        <h2>Is it Safe?</h2>
        <p className="score">Score: {score}</p>
      </div>
      
      {/* Question display */}
      <SafeOrUnsafe 
        item={shuffledItems[currentItemIndex]} 
        onAnswer={handleAnswer} 
        isAnswered={isAnswered}
      />
      
      {/* Feedback display */}
      {feedback.message && (
        <FeedbackBox 
          message={feedback.message}
          type={feedback.type}
        />
      )}
      
      {/* Progress display */}
      <div className="progress">
        Question {currentItemIndex + 1} of {shuffledItems.length}
      </div>
    </div>
  );
}

export default Game;
