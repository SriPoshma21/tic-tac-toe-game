import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import CategorySelection from './components/CategoriesSelection';
import GameBoard from './components/GameBoard';

const categories = {
  Animals: ['🐶', '🐱', '🐵', '🐰'],
  Food: ['🍕', '🍟', '🍔', '🍩'],
  Sports: ['⚽️', '🏀', '🏈', '🎾'],
  Nature: ['🌲', '🌸', '🌞', '🌧️'],
  Faces: ['😀', '😎', '😭', '😡'],
  Vehicles: ['🚗', '🚕', '🚓', '🚑'],
};

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [playerCategories, setPlayerCategories] = useState({});

  const handleCategoriesSelected = (selected) => {
    setPlayerCategories({
      1: categories[selected[1]],
      2: categories[selected[2]],
    });
  };

  return (
    <div className="app-container">
      
      {showWelcome ? (
        <WelcomePage
          onStart={() => setShowWelcome(false)}
          onHelp={() => setShowHelp(true)}
        />
      ) : !playerCategories[1] || !playerCategories[2] ? (
        <CategorySelection
          onSelect={handleCategoriesSelected}
          categories={categories}
        />
      ) : (
        <GameBoard playerCategories={playerCategories} />
      )}
    </div>
  );
};

export default App;
