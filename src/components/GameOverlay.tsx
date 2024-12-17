import React from 'react';

interface GameOverlayProps {
  score: number;
  onRestart: () => void;
}

export const GameOverlay: React.FC<GameOverlayProps> = ({ score, onRestart }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg">
      <div className="text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
        <p className="mb-4">Final Score: {score}</p>
        <button
          onClick={onRestart}
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};