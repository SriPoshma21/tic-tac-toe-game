import React, { useState } from 'react';
import '../assets/CategoriesSelection.css';

const categories = {
  Animals: ['🐶', '🐱', '🐵', '🐰', '🦁'],
  Food: ['🍕', '🍟', '🍔', '🍩', '🍣'],
  Sports: ['⚽️', '🏀', '🏈', '🎾', '🏓'],
  Nature: ['🌲', '🌻', '🌊', '🌞', '⛰️'],
  Faces: ['😀', '😎', '😡', '😢', '🥳'],
  Travel: ['✈️', '🚗', '🚀', '🚢', '🏝️'],
  Technology: ['💻', '📱', '🕹️', '🔋', '🔌'],
};

const CategoriesSelection = ({ onSelect }) => {
  const [selectedCategories, setSelectedCategories] = useState({ 1: '', 2: '' });

  const handleChange = (player, value) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [player]: value,
    }));
  };

  const handleStart = () => {
    if (selectedCategories[1] && selectedCategories[2]) {
      onSelect(selectedCategories);
    }
  };

  const categoryOptions = Object.keys(categories);

  return (
    <div className="category-selection-wrapper fade-in">
      <h1 className="title">🎮 Choose Your Emoji Category 😎</h1>

      <div className="player-select">
        {[1, 2].map((player) => (
          <div key={player} className="player-box">
            <label className="player-label">👤 Player {player}</label>
            <select
              className="dropdown"
              value={selectedCategories[player]}
              onChange={(e) => handleChange(player, e.target.value)}
            >
              <option value="">Select Category</option>
              {categoryOptions.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                  disabled={selectedCategories[3 - player] === cat}
                >
                  {cat}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {selectedCategories[1] && selectedCategories[2] && (
        <button className="start-button scale-in" onClick={handleStart}>
          🚀 Start Game
        </button>
      )}
    </div>
  );
};

export default CategoriesSelection;
