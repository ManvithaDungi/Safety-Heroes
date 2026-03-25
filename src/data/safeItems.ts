// SVG placeholder function - creates colorful emoji-based image placeholders
const createPlaceholderSVG = (emoji: string, backgroundColor: string, size: number = 250) => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size} ${size}'%3E%3Crect fill='${backgroundColor.replace('#', '%23')}' width='${size}' height='${size}'/%3E%3Ctext x='50%25' y='50%25' font-size='80' dominant-baseline='middle' text-anchor='middle' font-family='Arial'%3E${emoji}%3C/text%3E%3C/svg%3E`;
};

export interface SafeItem {
  id: number;
  name: string;
  emoji: string;
  image: string;
  question: string;
  isSafe: boolean;
  correctExplanation: string;
  incorrectExplanation: string;
  bgColor: string;
}

export const safeItems: SafeItem[] = [
  {
    id: 1,
    name: 'Knife',
    emoji: '🔪',
    image: createPlaceholderSVG('🔪', '#E6E6FA'),
    question: 'Is it safe to touch this?',
    isSafe: false,
    correctExplanation: 'Excellent! Knives are sharp and can cut. Always ask a grown-up for help.',
    incorrectExplanation: 'Not quite! Knives are dangerous. Never touch sharp objects alone.',
    bgColor: '#E6E6FA',
  },
  {
    id: 2,
    name: 'Teddy Bear',
    emoji: '🧸',
    image: createPlaceholderSVG('🧸', '#FFE6E6'),
    question: 'Is it safe to play with this?',
    isSafe: true,
    correctExplanation: 'Perfect! Teddy bears are safe, cuddly friends for playtime. 🎉',
    incorrectExplanation: 'Actually, teddy bears are super safe and fun to play with!',
    bgColor: '#FFE6E6',
  },
  {
    id: 3,
    name: 'Hot Stove',
    emoji: '🔥',
    image: createPlaceholderSVG('🔥', '#FFF0E6'),
    question: 'Is it safe to touch this?',
    isSafe: false,
    correctExplanation: 'Great job! Hot stoves burn. Never touch the stove without a grown-up.',
    incorrectExplanation: 'Oops! Hot stoves are very dangerous. Don\'t touch them!',
    bgColor: '#FFF0E6',
  },
  {
    id: 4,
    name: 'Book',
    emoji: '📖',
    image: createPlaceholderSVG('📖', '#E6F5FF'),
    question: 'Is it safe to use this?',
    isSafe: true,
    correctExplanation: 'Awesome! Books are safe and great for learning. Reading is amazing! 📚',
    incorrectExplanation: 'Yes! Books are safe and help you learn new things.',
    bgColor: '#E6F5FF',
  },
  {
    id: 5,
    name: 'Cleaning Supplies',
    emoji: '🧴',
    image: createPlaceholderSVG('🧴', '#F0E6FF'),
    question: 'Is it safe to play with these?',
    isSafe: false,
    correctExplanation: 'Correct! Cleaning products are poisonous. Never touch them alone.',
    incorrectExplanation: 'No way! Cleaning supplies are very dangerous. Stay away!',
    bgColor: '#F0E6FF',
  },
  {
    id: 6,
    name: 'Apple',
    emoji: '🍎',
    image: createPlaceholderSVG('🍎', '#E6FFE6'),
    question: 'Is it safe to eat this?',
    isSafe: true,
    correctExplanation: 'Wonderful! Apples are healthy and delicious. Eat more fruit! 🌟',
    incorrectExplanation: 'Yes! Apples are nutritious and safe to eat.',
    bgColor: '#E6FFE6',
  },
  {
    id: 7,
    name: 'Scissors',
    emoji: '✂️',
    image: createPlaceholderSVG('✂️', '#FFE6F0'),
    question: 'Are these safe to use by yourself?',
    isSafe: false,
    correctExplanation: 'Smart! Scissors are sharp and need grown-up supervision.',
    incorrectExplanation: 'No! Scissors are dangerous. Ask a grown-up to help you.',
    bgColor: '#FFE6F0',
  },
  {
    id: 8,
    name: 'Soccer Ball',
    emoji: '⚽',
    image: createPlaceholderSVG('⚽', '#FFFFE6'),
    question: 'Is this a safe toy to play with?',
    isSafe: true,
    correctExplanation: 'Perfect! Sports are fun and keep you healthy. Go play! ⚽',
    incorrectExplanation: 'Right! Soccer balls are safe and great for exercise.',
    bgColor: '#FFFFE6',
  },
  {
    id: 9,
    name: 'Medicine Pills',
    emoji: '💊',
    image: createPlaceholderSVG('💊', '#E6FFFF'),
    question: 'Is it safe to take these yourself?',
    isSafe: false,
    correctExplanation: 'Good thinking! Medicine is dangerous. Only grown-ups can give medicine.',
    incorrectExplanation: 'No! Never take medicine by yourself. Ask a grown-up first.',
    bgColor: '#E6FFFF',
  },
  {
    id: 10,
    name: 'Dog',
    emoji: '🐕',
    image: createPlaceholderSVG('🐕', '#FFE6CC'),
    question: 'Is it safe to interact with this?',
    isSafe: true,
    correctExplanation: 'Excellent! Dogs can be wonderful friends when you\'re gentle. 🐕‍🦺',
    incorrectExplanation: 'Yes! Dogs are friendly companions.',
    bgColor: '#FFE6CC',
  },
  {
    id: 11,
    name: 'Matchstick',
    emoji: '🔥',
    image: createPlaceholderSVG('🔥', '#FFE6D9'),
    question: 'Is it safe to play with these?',
    isSafe: false,
    correctExplanation: 'Right! Matches cause fire and are very dangerous.',
    incorrectExplanation: 'No! Matches are dangerous. Only grown-ups can use them.',
    bgColor: '#FFE6D9',
  },
  {
    id: 12,
    name: 'Bicycle',
    emoji: '🚴',
    image: createPlaceholderSVG('🚴', '#E6FFCC'),
    question: 'Is this safe to ride with a helmet?',
    isSafe: true,
    correctExplanation: 'Fantastic! Bikes are fun with a helmet to protect you. 🚴‍♀️',
    incorrectExplanation: 'Yes! Bikes are fun and safe when you wear your helmet.',
    bgColor: '#E6FFCC',
  },
];
