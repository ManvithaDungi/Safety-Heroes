import React, { createContext, useState, ReactNode } from 'react';

export type PetMood = 'happy' | 'excited' | 'peaceful' | 'sad' | 'shocked' | 'overjoyed' | 'neutral';

interface Feedback {
  message: string;
  type: 'success' | 'error' | 'neutral';
}

// GameContext for game and feedback state
export interface GameContextType {
  score: number;
  updateScore: (points: number) => void;
  selectedItems: number[];
  addItem: (itemId: number) => void;
  feedback: Feedback | null;
  giveFeedback: (message: string, type: 'success' | 'error' | 'neutral') => void;
  clearFeedback: () => void;
}

// PetContext for pet companion state
export interface PetContextType {
  petMood: PetMood;
  setPetMood: (mood: PetMood) => void;
  allCorrect: boolean;
  setAllCorrect: (value: boolean) => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);
export const PetContext = createContext<PetContextType | undefined>(undefined);

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [score, setScore] = useState(0);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [petMood, setPetMood] = useState<PetMood>('neutral');
  const [allCorrect, setAllCorrect] = useState(false);

  const updateScore = (points: number) => {
    setScore((prev) => prev + points);
  };

  const addItem = (itemId: number) => {
    setSelectedItems((prev) => [...prev, itemId]);
  };

  const giveFeedback = (message: string, type: 'success' | 'error' | 'neutral' = 'neutral') => {
    setFeedback({ message, type });
  };

  const clearFeedback = () => {
    setFeedback(null);
  };

  const gameContextValue: GameContextType = {
    score,
    updateScore,
    selectedItems,
    addItem,
    feedback,
    giveFeedback,
    clearFeedback,
  };

  const petContextValue: PetContextType = {
    petMood,
    setPetMood,
    allCorrect,
    setAllCorrect,
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <PetContext.Provider value={petContextValue}>
        {children}
      </PetContext.Provider>
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within GameProvider');
  }
  return context;
};

export const usePetContext = () => {
  const context = React.useContext(PetContext);
  if (!context) {
    throw new Error('usePetContext must be used within GameProvider');
  }
  return context;
};
