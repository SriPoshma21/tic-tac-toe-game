// src/components/GameBoard.jsx
import React, { useState } from 'react';
import '../assets/GameBoard.css';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const GameBoard = ({ playerCategories }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [moves, setMoves] = useState({ 1: [], 2: [] });
  const [winner, setWinner] = useState(null);

  const getRandomEmoji = (category) =>
    category[Math.floor(Math.random() * category.length)];

  const checkWinner = (playerMoves) => {
    const playerPositions = playerMoves.map((move) => move.index);
    return winningCombinations.some((combo) =>
      combo.every((pos) => playerPositions.includes(pos))
    );
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const playerMoves = [...moves[currentPlayer]];
    const playerCategory = playerCategories[currentPlayer];
    const newEmoji = getRandomEmoji(playerCategory);

    let updatedBoard = [...board];
    let updatedMoves = { ...moves };

    if (playerMoves.length >= 3) {
      const oldestMove = playerMoves[0];
      if (oldestMove.index === index) {
        alert("You can't reuse the spot where your emoji just vanished.");
        return;
      }
      updatedBoard[oldestMove.index] = null;
      playerMoves.shift();
    }

    updatedBoard[index] = newEmoji;
    playerMoves.push({ index, emoji: newEmoji });

    updatedMoves[currentPlayer] = playerMoves;
    setBoard(updatedBoard);
    setMoves(updatedMoves);

    if (checkWinner(playerMoves)) {
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setMoves({ 1: [], 2: [] });
    setCurrentPlayer(1);
    setWinner(null);
  };

  return (
    <div className="game-container">
  <h1>Player 1  vs Player 2 </h1>

  {winner ? (
    <div className="winner-section">
      <h2>🎉 Player {winner} Wins!</h2>
      <button className="play-again-btn" onClick={handleReset}>
        Play Again
      </button>
    </div>
  ) : (
    <p className="turn-text">
      Turn: <strong>Player {currentPlayer}</strong> {playerCategories[currentPlayer]?.[0] || ''}
    </p>
  )}

  <div className="board">
    {board.map((cell, index) => {
      const isPlayer1 = moves[1].some((m) => m.index === index);
      const isPlayer2 = moves[2].some((m) => m.index === index);
      const cellClass = isPlayer1
        ? 'cell player1'
        : isPlayer2
        ? 'cell player2'
        : 'cell';

      return (
        <div
          key={index}
          className={`${cellClass} ${
            isPlayer1 || isPlayer2 ? 'vanish' : ''
          }`}
          onClick={() => handleClick(index)}
        >
          {cell && <span className="emoji">{cell}</span>}
        </div>
      );
    })}
  </div>
</div>

  )

};

export default GameBoard;
