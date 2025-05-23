
import React, { useState } from 'react';
import '../assets/GameBoard.css';


const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const handleClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer === 1 ? '🍕' : '🍔'; // Sample emojis
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <div className="game-container">
      <h1>Emoji Tic Tac Toe</h1>
      <p className="turn-text">Current Player: {currentPlayer === 1 ? 'Player 1 🍕' : 'Player 2 🍔'}</p>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
