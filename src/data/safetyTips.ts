export interface Tip {
  id: string;
  icon: string;
  text: string;
  description?: string;
}

export interface TipCategory {
  name: string;
  icon: string;
  tips: Tip[];
}

export const safetyTips: TipCategory[] = [
  {
    name: 'Daily Safety',
    icon: '🛡️',
    tips: [
      { id: 'safety-1', icon: '🔪', text: 'Don\'t touch knives or sharp tools without a grown-up.' },
      { id: 'safety-2', icon: '🔥', text: 'Never touch the hot stove or oven.' },
      { id: 'safety-3', icon: '⚡', text: 'Don\'t play with electrical outlets or plug in cords.' },
      { id: 'safety-4', icon: '💊', text: 'Never take medicine by yourself.' },
      { id: 'safety-5', icon: '🧴', text: 'Stay away from cleaning supplies and chemicals.' },
      { id: 'safety-6', icon: '🚗', text: 'Always hold a grown-up\'s hand when crossing the street.' },
      { id: 'safety-7', icon: '🪟', text: 'Don\'t climb on or lean out of windows.' },
      { id: 'safety-8', icon: '🚪', text: 'Don\'t open doors for strangers.' },
    ],
  },
  {
    name: 'Learning Habits',
    icon: '🧠',
    tips: [
      { id: 'learning-1', icon: '⏰', text: 'Follow a daily routine for homework and learning.' },
      { id: 'learning-2', icon: '✅', text: 'Finish one task before starting another.' },
      { id: 'learning-3', icon: '🎯', text: 'Stay focused and don\'t get distracted.' },
      { id: 'learning-4', icon: '📋', text: 'Use a checklist to remember what to do.' },
      { id: 'learning-5', icon: '📚', text: 'Keep your learning space clean and organized.' },
      { id: 'learning-6', icon: '🙋', text: 'Ask for help when you need it.' },
      { id: 'learning-7', icon: '🤔', text: 'Check your work before you finish.' },
    ],
  },
  {
    name: 'Playtime & Exercise',
    icon: '🏃',
    tips: [
      { id: 'play-1', icon: '🎮', text: 'Take turns in games and respect others\' turn.' },
      { id: 'play-2', icon: '🧩', text: 'Share toys and play nicely with others.' },
      { id: 'play-3', icon: '🎭', text: 'Use imagination and pretend play to explore new ideas.' },
      { id: 'play-4', icon: '🎲', text: 'Follow the rules of games.' },
      { id: 'play-5', icon: '🎨', text: 'Do creative activities like drawing and building.' },
      { id: 'play-6', icon: '🏃‍♂️', text: 'Get exercise every day by running, playing, or sports.' },
      { id: 'play-7', icon: '🚶', text: 'Play alone sometimes to have quiet fun.' },
      { id: 'play-8', icon: '🤝', text: 'Make friends and play together.' },
    ],
  },
  {
    name: 'Special Skills',
    icon: '⭐',
    tips: [
      { id: 'special-1', icon: '😌', text: 'Do sensory-friendly activities like quiet time or fidget toys.' },
      { id: 'special-2', icon: '🎯', text: 'Practice skills like drawing, building, or music.' },
      { id: 'special-3', icon: '💆', text: 'Use calming activities like deep breathing when you feel upset.' },
    ],
  },
];
