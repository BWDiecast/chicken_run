import React from 'react';
import { GameBoard } from './GameBoard';
import { GameOverlay } from './GameOverlay';
import { useGameState } from '../hooks/useGameState';

export const Game: React.FC = () => {
  const { score, gameOver, resetGame } = useGameState();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="text-white mb-4 text-xl">Score: {score}</div>
      <div className="relative">
        <GameBoard />
        {gameOver && <GameOverlay score={score} onRestart={resetGame} />}
      </div>
      <div className="text-white mt-4 text-sm">
        Use arrow keys to move the chicken and collect green food while avoiding red bugs!
      </div>
    </div>
  );
};