//src/data/safeItems.js
/**
/**
 * Safety items configuration for the game.
 * Placeholder images use the new pastel color palette for consistency.
 * Safe items get cool colors (mint, blue), unsafe items get warm colors (pink, rose).
 */
const items = [
  {
    id: 1,
    name: 'Knife',
    image: 'https://placehold.co/250x250/FFE1F0/7A2E52?text=Knife',
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
    image: 'https://placehold.co/250x250/E0FFE0/2D5016?text=Teddy+Bear',
    question: 'Is it safe to play with this?',
    isSafe: true,
    explanation: {
      correct: "That's right! Teddy bears are soft and safe toys to play with.",
      incorrect: "You're right, this is a toy! Teddy bears are soft and safe to play with."
    }
  },
  {
    id: 3,
    name: 'Hot Stove',
    image: 'https://placehold.co/250x250/FFD6E8/7A2E52?text=Hot+Stove',
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
    image: 'https://placehold.co/250x250/E1F0FF/2D5016?text=Book',
    question: 'Is it safe to use this?',
    isSafe: true,
    explanation: {
      correct: "Perfect! Books are safe and wonderful for reading and learning.",
      incorrect: "You got it! Books are safe. They are fun to read and look at."
    }
  },
  {
    id: 5,
    name: 'Cleaning Supplies',
    image: 'https://placehold.co/250x250/FFE1F0/7A2E52?text=Chemicals',
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
    image: 'https://placehold.co/250x250/E0FFE0/2D5016?text=Apple',
    question: 'Is it safe to eat this?',
    isSafe: true,
    explanation: {
        correct: "Yes! Apples are a healthy and safe snack. Always wash them first!",
        incorrect: "It's okay, apples are safe and healthy to eat. Just remember to wash them!"
    }
  }
];

export default items;
