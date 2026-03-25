import React from 'react';
import { usePetContext } from '../contexts/GameContext';

const petMoodLabels: Record<string, string> = {
  happy: 'Happy',
  excited: 'Excited',
  peaceful: 'Peaceful',
  sad: 'Encouraging',
  shocked: 'Surprised',
  overjoyed: 'Overjoyed',
  neutral: 'Ready',
};

const petMessages: Record<string, string> = {
  happy: 'I\'m happy for you!',
  excited: 'Great job! Keep it up!',
  peaceful: 'You\'re doing amazing.',
  sad: 'Keep trying, you can do it!',
  shocked: 'That was interesting!',
  overjoyed: 'You\'re a Safety Hero!',
  neutral: 'Let\'s play together!',
};

const moodColors: Record<string, string> = {
  happy: 'bg-secondary-soft',
  excited: 'bg-highlight-soft',
  peaceful: 'bg-secondary-soft/30',
  sad: 'bg-accent-soft',
  shocked: 'bg-highlight-soft',
  overjoyed: 'bg-primary-soft',
  neutral: 'bg-border-light',
};

export const PetCompanion: React.FC = () => {
  const { petMood, allCorrect } = usePetContext();

  return (
    <div className="fixed right-4 bottom-20 md:bottom-4 card max-w-xs md:max-w-sm">
      {/* Pet mood indicator - Minimal, accessible */}
      <div className="text-center mb-5">
        <div className={`text-5xl md:text-6xl mb-3 font-nunito font-bold text-text-primary ${petMood !== 'neutral' ? 'animate-gentle-float' : ''}`}>
          {petMoodLabels[petMood] || petMoodLabels.neutral}
        </div>
        <p className="text-xs font-nunito font-bold text-text-secondary uppercase tracking-wider">
          Companion Status
        </p>
      </div>

      {/* Speech bubble - Clean, readable */}
      <div className={`${moodColors[petMood]} rounded-2xl p-4 mb-4 relative`}>
        <p className="text-sm font-quicksand text-text-primary text-center leading-relaxed">
          {petMessages[petMood] || petMessages.neutral}
        </p>
      </div>

      {/* Encouragement badge - Calm celebration */}
      {allCorrect && (
        <div className="bg-success-soft rounded-xl p-3 text-center animate-gentle-float">
          <p className="text-sm font-nunito font-bold text-text-primary">
            Perfect Score!
          </p>
        </div>
      )}
    </div>
  );
};
