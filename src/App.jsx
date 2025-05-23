import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import Help from './components/Help';
import './assets/styles.css';

const categories = {
  Animals: ['🐶', '🐱', '🐵', '🐰'],
  Food: ['🍕', '🍟', '🍔', '🍩'],
  Sports: ['⚽️', '🏀', '🏈', '🎾'],
};

const CategorySelection = ({ onSelect }) => {
  const [player, setPlayer] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState({});

  const handleCategoryClick = (cat) => {
    const updated = {
      ...selectedCategories,
      [player]: cat
    };
    setSelectedCategories(updated);

    if (player === 1) {
      setPlayer(2);
    } else {
      onSelect(updated);
    }
  };

  return (
    <div className="category-selection">
      <h2>Player {player}, choose your emoji category</h2>
      <div className="categories">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            disabled={Object.values(selectedCategories).includes(cat)}
            className="category-btn"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [playerCategories, setPlayerCategories] = useState(null);
  const [showHelp, setShowHelp] = useState(true);

  const handleCategoriesSelected = (selected) => {
    setPlayerCategories({
      1: categories[selected[1]],
      2: categories[selected[2]]
    });
  };

  return (
    <div className="app-container">
      {showHelp && <Help onClose={() => setShowHelp(false)} />}
      {!playerCategories ? (
        <CategorySelection onSelect={handleCategoriesSelected} />
      ) : (
        <GameBoard playerCategories={playerCategories} />
      )}
    </div>
  );
};

export default App;
