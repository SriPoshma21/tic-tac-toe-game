import React, { useState } from 'react';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
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
      <h1>Emoji Tic Tac Toe</h1>

      {winner ? (
        <div className="winner-section">
          <h2>🎉 Player {winner} Wins!</h2>
          <button className="play-again-btn" onClick={handleReset}>
            Play Again
          </button>
        </div>
      ) : (
        <p className="turn-text">
  Current Player: Player {currentPlayer} {' '}
  {playerCategories[currentPlayer]?.[0] || ''}
</p>

      )}

      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
