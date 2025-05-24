
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
            <h2>📜 Game Rules</h2>
            <ul>
              <li>2 Players must select **different emoji categories**.</li>
              <li>Players take turns placing emojis on the board.</li>
              <li>The first to align 3 emojis in a row (horizontal, vertical, or diagonal) wins.</li>
              <li>Chosen emojis will disappear from the player's list after each move (vanishing rule).</li>
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
