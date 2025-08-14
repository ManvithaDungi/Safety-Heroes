//File: src/pages/Tips.js
import React from 'react';
import './Tips.css'; // Custom CSS for pastel and accessible styling

// ---------------- Safety Tips Data ----------------
// Each tip includes an emoji icon and a short text message.
// The tips are simple, direct, and safe for children.
const safetyTips = [
    { icon: '🚫', text: "Don't touch knives or sharp tools without a grown-up." },
    { icon: '🔥', text: 'Stay away from hot stoves, ovens, and pans.' },
    { icon: '🙋', text: 'If you are ever unsure, always ask an adult for help.' },
    { icon: '🔌', text: "Don't play with electrical outlets or cords." },
    { icon: '🚗', text: 'Always wear your seatbelt when you are in a car.' },
    { icon: '💊', text: "Never take medicine unless a grown-up gives it to you." }
];

// ---------------- Component Definition ----------------
function Tips() {
  return (
    <div>
      {/* Section Heading */}
      <h2 style={{ marginBottom: '2rem' }}>Daily Safety Tips</h2>

      {/* Tips Container */}
      <div className="tips-grid">
        {safetyTips.map((tip, index) => (
          // Each tip is displayed in its own card
          <div key={index} className="tip-card">
            {/* Icon for visual recognition */}
            <div className="tip-icon">{tip.icon}</div>
            {/* Tip text for reading */}
            <p className="tip-text">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;
