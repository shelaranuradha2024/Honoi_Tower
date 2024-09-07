import React from 'react';
import Rod from './Rod';
import './GameBoard.css';

const GameBoard = ({ rods }) => {
  return (
    <div className="game-board">
      <Rod rods={rods} rodIndex={0} />
      <Rod rods={rods} rodIndex={1} />
      <Rod rods={rods} rodIndex={2} />
    </div>
  );
};

export default GameBoard;