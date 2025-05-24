import React from 'react';
import '../assets/Help.css';

const Help = ({ onClose }) => {
  return (
    <div className="help-overlay">
      <div className="help-modal">
        <h2>Start Blink Tic Tac Toe</h2>
        <ul>
          <li>🎮 Two players select different emoji categories.</li>
          <li>🔁 Take turns placing your emojis on the board.</li>
          <li>🧊 Only 3 emojis per player are allowed at a time.</li>
          <li>💨 Your oldest emoji will disappear when placing a fourth one.</li>
          <li>❌ You can't reuse the same spot where an emoji just vanished.</li>
          <li>🏆 The first to align 3 emojis in a row (vertically, horizontally, or diagonally) wins!</li>
        </ul>
        <button onClick={onClose} className="close-help-btn">Got it!</button>
      </div>
    </div>
  );
};

export default Help;
