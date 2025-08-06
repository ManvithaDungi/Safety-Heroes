/**
 * Safety items configuration for the game.
 * Image paths are updated to correctly reference files in the `public/assets` directory.
 * The 'incorrect' explanation for safe items has also been corrected.
 */
const items = [
  {
    id: 1,
    name: 'Knife',
    image: '/assets/knife.jpg', // Correct path for items in public folder
    question: 'Is it safe to touch this?',
    isSafe: false,
    explanation: {
      correct: "Good job! Knives are sharp and for grown-ups. Always ask an adult for help.",
      incorrect: "Be careful! Knives are sharp and can hurt you. Never touch them without an adult."
    }
  },
  {
    id: 2,
    name: 'Teddy Bear',
    image: '/assets/teddyBear.jpg', // Correct path
    question: 'Is it safe to play with this?',
    isSafe: true,
    explanation: {
      correct: "That's right! Teddy bears are soft and safe toys to play with.",
      incorrect: "It's okay to play with this one! Teddy bears are actually soft and safe toys."
    }
  },
  {
    id: 3,
    name: 'Hot Stove',
    image: '/assets/stove.jpg', // Correct path
    question: 'Is it safe to touch this?',
    isSafe: false,
    explanation: {
      correct: "Excellent! Stoves can be very hot and dangerous. It's smart to stay away.",
      incorrect: "Watch out! A stove can be very hot and burn you. It's not safe to touch."
    }
  },
  {
    id: 4,
    name: 'Book',
    image: '/assets/book.jpg', // Correct path
    question: 'Is it safe to use this?',
    isSafe: true,
    explanation: {
      correct: "Perfect! Books are safe and wonderful for reading and learning.",
      incorrect: "No need to worry here! Books are safe and fun to read."
    }
  },
  {
    id: 5,
    name: 'Cleaning Supplies',
    image: '/assets/cleaning.jpg', // Correct path
    question: 'Is it safe to play with these?',
    isSafe: false,
    explanation: {
        correct: "That's right! Cleaning supplies have chemicals and are not toys.",
        incorrect: "Be careful! These bottles contain chemicals that are not safe to touch or drink."
    }
  },
  {
    id: 6,
    name: 'Apple',
    image: '/assets/apple.jpg', // Correct path
    question: 'Is it safe to eat this?',
    isSafe: true,
    explanation: {
        correct: "Yes! Apples are a healthy and safe snack. Always wash them first!",
        incorrect: "It's okay! Apples are a safe and healthy snack, just remember to wash them first."
    }
  }
];

export default items;
