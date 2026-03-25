import React, { useState, useEffect } from 'react';
import { SafeOrUnsafe } from '../components/SafeOrUnsafe';
import { FeedbackBox } from '../components/FeedbackBox';
import { PetCompanion } from '../components/PetCompanion';
import { safeItems } from '../data/safeItems';
import { useGameContext, usePetContext } from '../contexts/GameContext';

// Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const Game: React.FC = () => {
  const { score, feedback, clearFeedback } = useGameContext();
  const { setAllCorrect } = usePetContext();
  const [shuffledItems, setShuffledItems] = useState(shuffleArray(safeItems));
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  // Preload images on mount
  useEffect(() => {
    shuffledItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [shuffledItems]);

  const currentItem = shuffledItems[currentItemIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setAnswered(true);
    } else {
      setAnswered(true);
    }

    setTimeout(() => {
      if (currentItemIndex + 1 >= shuffledItems.length) {
        setGameFinished(true);
        setAllCorrect(isCorrect && currentItemIndex === 0);
      } else {
        setCurrentItemIndex((prev) => prev + 1);
        setAnswered(false);
      }
    }, 2500);
  };

  const handleReplay = () => {
    setShuffledItems(shuffleArray(safeItems));
    setCurrentItemIndex(0);
    setAnswered(false);
    setGameFinished(false);
    setAllCorrect(false);
  };

  if (gameFinished) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="text-6xl font-nunito font-bold text-primary-soft mb-4">
              Excellent!
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-nunito font-bold text-text-primary mb-4">
            You're a Safety Hero
          </h1>
          <p className="text-xl font-nunito font-semibold text-text-secondary mb-2">
            Final Score: <span className="text-primary-soft">{score}</span> / 12
          </p>
          <p className="text-lg font-quicksand text-text-secondary mb-8 leading-relaxed">
            Amazing work learning about safety today!
          </p>

          <button
            onClick={handleReplay}
            className="btn-primary-strong px-8 py-4 text-lg font-bold"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main id="main-content" className="min-h-screen bg-bg-primary py-8 md:py-12">
      {/* Progress Bar - Minimal, non-distracting */}
      <div className="max-w-2xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex items-center justify-between mb-3">
          <p className="font-nunito font-semibold text-text-primary text-base md:text-lg">
            Question {currentItemIndex + 1} of {shuffledItems.length}
          </p>
          <p className="font-nunito font-semibold text-primary-soft text-base md:text-lg">
            Score: {score}
          </p>
        </div>
        <div className="w-full bg-border-light rounded-full h-2 overflow-hidden">
          <div
            className="bg-primary-soft h-full rounded-full smooth-transition"
            style={{ width: `${((currentItemIndex + 1) / shuffledItems.length) * 100}%` }}
            role="progressbar"
            aria-valuenow={currentItemIndex + 1}
            aria-valuemin={1}
            aria-valuemax={shuffledItems.length}
          ></div>
        </div>
      </div>

      {/* Game Card - Clean, generous spacing */}
      <div className="max-w-2xl mx-auto px-4 md:px-8 mb-32">
        <div className="card-lg">
          <SafeOrUnsafe
            item={currentItem}
            onAnswer={handleAnswer}
            isAnswered={answered}
          />
        </div>
      </div>

      {/* Feedback Box */}
      {feedback && (
        <FeedbackBox
          message={feedback.message}
          type={feedback.type}
          onDismiss={clearFeedback}
        />
      )}

      {/* Pet Companion */}
      <PetCompanion />
    </main>
  );
};
