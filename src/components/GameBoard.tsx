import React, { useRef, useEffect } from 'react';
import { CELL_SIZE, GRID_SIZE } from '../constants/gameConfig';
import { useGameState } from '../hooks/useGameState';
import { useGameLoop } from '../hooks/useGameLoop';
import { drawGame } from '../utils/drawUtils';

export const GameBoard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { gameState, moveChicken } = useGameState();

  useGameLoop(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx && !gameState.gameOver) {
      drawGame(ctx, gameState);
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
        moveChicken(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveChicken]);

  return (
    <canvas
      ref={canvasRef}
      width={GRID_SIZE * CELL_SIZE}
      height={GRID_SIZE * CELL_SIZE}
      className="bg-gray-800 rounded-lg"
    />
  );
};