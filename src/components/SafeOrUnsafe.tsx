import React, { useState } from 'react';
import { SafeItem } from '../data/safeItems';
import { useGameContext, usePetContext } from '../contexts/GameContext';

interface SafeOrUnsafeProps {
  item: SafeItem;
  onAnswer: (isCorrect: boolean) => void;
  isAnswered: boolean;
}

export const SafeOrUnsafe: React.FC<SafeOrUnsafeProps> = ({ item, onAnswer, isAnswered }) => {
  const { giveFeedback, clearFeedback } = useGameContext();
  const { setPetMood } = usePetContext();
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  const handleAnswer = async (userChoice: boolean) => {
    setAnswered(true);
    setSelectedAnswer(userChoice);
    const isCorrect = userChoice === item.isSafe;

    if (isCorrect) {
      giveFeedback(item.correctExplanation, 'success');
      setPetMood('excited');
    } else {
      giveFeedback(item.incorrectExplanation, 'error');
      setPetMood('sad');
    }

    setTimeout(() => {
      onAnswer(isCorrect);
      setAnswered(false);
      setSelectedAnswer(null);
      clearFeedback();
    }, 2500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Item Image - Minimal shadow, generous space */}
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-soft-lg"
          />
        </div>
      </div>

      {/* Item Name - Clear, readable */}
      <h2 className="text-3xl md:text-4xl font-nunito font-bold text-center text-text-primary mb-4">
        {item.name}
      </h2>

      {/* Question - High readability, calm tone */}
      <p className="text-lg md:text-xl font-quicksand text-center text-text-secondary mb-8 leading-relaxed">
        {item.question}
      </p>

      {/* Answer Buttons - Large, clear, accessible */}
      <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
        <button
          onClick={() => handleAnswer(true)}
          disabled={isAnswered || answered}
          className={`px-8 py-4 md:px-10 md:py-5 rounded-2xl font-nunito font-bold text-lg md:text-xl smooth-transition ${
            !isAnswered && !answered
              ? 'bg-success-soft text-text-primary shadow-soft hover:shadow-soft-md hover:brightness-95 active:scale-95'
              : selectedAnswer === true
              ? 'bg-success-soft text-text-primary shadow-soft-lg'
              : 'bg-border-light text-text-secondary cursor-not-allowed'
          }`}
          aria-label="Answer: this item is safe"
        >
          Safe
        </button>

        <button
          onClick={() => handleAnswer(false)}
          disabled={isAnswered || answered}
          className={`px-8 py-4 md:px-10 md:py-5 rounded-2xl font-nunito font-bold text-lg md:text-xl smooth-transition ${
            !isAnswered && !answered
              ? 'bg-error-soft text-text-primary shadow-soft hover:shadow-soft-md hover:brightness-95 active:scale-95'
              : selectedAnswer === false
              ? 'bg-error-soft text-text-primary shadow-soft-lg'
              : 'bg-border-light text-text-secondary cursor-not-allowed'
          }`}
          aria-label="Answer: this item is unsafe"
        >
          Unsafe
        </button>
      </div>

      {/* Loading indicator - minimal */}
      {answered && (
        <div className="text-center text-sm font-quicksand text-text-secondary animate-soft-pulse">
          Next question...
        </div>
      )}
    </div>
  );
};
