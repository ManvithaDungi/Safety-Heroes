/* src/pages/Tips.js - Daily Safety Tips Component
   This component displays a list of daily safety tips for kids.*/
import React from 'react';
import './Tips.css'; // We'll create this new CSS file for styling

const safetyTips = [
    { icon: '🚫', text: "Don't touch knives or sharp tools without a grown-up." },
    { icon: '🔥', text: 'Stay away from hot stoves, ovens, and pans.' },
    { icon: '🙋', text: 'If you are ever unsure, always ask an adult for help.' },
    { icon: '🔌', text: "Don't play with electrical outlets or cords." },
    { icon: '🚗', text: 'Always wear your seatbelt when you are in a car.' },
    { icon: '💊', text: "Never take medicine unless a grown-up gives it to you." }
];

function Tips() {
  return (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Daily Safety Tips</h2>
      <div className="tips-grid">
        {safetyTips.map((tip, index) => (
          <div key={index} className="tip-card">
            <div className="tip-icon">{tip.icon}</div>
            <p className="tip-text">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;
