import React, { useState } from 'react';

const categories = {
  Animals: ['🐶', '🐱', '🐵', '🐰'],
  Food: ['🍕', '🍟', '🍔', '🍩'],
  Sports: ['⚽️', '🏀', '🏈', '🎾'],
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
    <div className="category-selection-wrapper">
      <h1 className="title">🎮 Choose Your Emoji Category</h1>

      <div className="player-select">
        <div className="player-box">
          <label className="player-label">👤 Player 1</label>
          <select
            className="dropdown"
            value={selectedCategories[1]}
            onChange={(e) => handleChange(1, e.target.value)}
          >
            <option value="">-- Select Category --</option>
            {categoryOptions.map((cat) => (
              <option
                key={cat}
                value={cat}
                disabled={selectedCategories[2] === cat}
              >
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="player-box">
          <label className="player-label">👤 Player 2</label>
          <select
            className="dropdown"
            value={selectedCategories[2]}
            onChange={(e) => handleChange(2, e.target.value)}
          >
            <option value="">-- Select Category --</option>
            {categoryOptions.map((cat) => (
              <option
                key={cat}
                value={cat}
                disabled={selectedCategories[1] === cat}
              >
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedCategories[1] && selectedCategories[2] && (
        <button className="start-button" onClick={handleStart}>
          🚀 Start Game
        </button>
      )}
    </div>
  );
};

export default CategoriesSelection;
