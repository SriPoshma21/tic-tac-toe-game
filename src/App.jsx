import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import CategorySelection from './components/CategoriesSelection';
import Help from './components/Help';
import './assets/styles.css';

const categories = {
  Animals: ['🐶', '🐱', '🐵', '🐰'],
  Food: ['🍕', '🍟', '🍔', '🍩'],
  Sports: ['⚽️', '🏀', '🏈', '🎾'],
};

const App = () => {
  const [playerCategories, setPlayerCategories] = useState({});
  const [showHelp, setShowHelp] = useState(true);

  const handleCategoriesSelected = (selected) => {
    setPlayerCategories({
      1: categories[selected[1]],
      2: categories[selected[2]],
    });
  };

  return (
    <div className="app-container">
      {showHelp && <Help onClose={() => setShowHelp(false)} />}

      {/* Show CategorySelection if categories are not yet selected */}
      {!playerCategories[1] || !playerCategories[2] ? (
        <CategorySelection onSelect={handleCategoriesSelected} selected={playerCategories} />
      ) : (
        <GameBoard playerCategories={playerCategories} />
      )}
    </div>
  );
};

export default App;
