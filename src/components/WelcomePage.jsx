
import React, { useState } from 'react';
import '../assets/WelcomePage.css';

const WelcomePage = ({ onStart }) => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="welcome-container">
      <h2 className="welcome-title">🎉 Welcome to Emoji Tic Tac Toe 🎮</h2>
      <p className="welcome-subtitle">Let the emoji battle begin!</p>

      <div className="button-group">
        <button className="start-btn" onClick={onStart}>
          🚀 Start Game
        </button>
        <button className="help-btn" onClick={() => setShowRules(true)}>
          ❓ Help
        </button>
      </div>

      {showRules && (
        <div className="modal-overlay" onClick={() => setShowRules(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>How to Play Emoji Tic Tac Toe</h2>
        <ul>
          <li>🎮 Two players select different emoji categories.</li>
          <li>🔁 Take turns placing your emojis on the board.</li>
          <li>🧊 Only 3 emojis per player are allowed at a time.</li>
          <li>💨 Your oldest emoji will disappear when placing a fourth one.</li>
          <li>❌ You can't reuse the same spot where an emoji just vanished.</li>
          <li>🏆 The first to align 3 emojis in a row (vertically, horizontally, or diagonally) wins!</li>
        </ul>
            <button className="close-btn" onClick={() => setShowRules(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
