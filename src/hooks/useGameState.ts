import { useState, useCallback } from 'react';
import { GameState, Chicken, Bug, Food } from '../types/game';
import { CELL_SIZE, GRID_SIZE, INITIAL_BUGS, INITIAL_FOOD } from '../constants/gameConfig';
import { getRandomPosition } from '../utils/gameUtils';
import { updateGameState } from '../utils/gameLogic';

const createInitialState = (): GameState => ({
  chicken: {
    x: CELL_SIZE * 1,
    y: CELL_SIZE * 1,
    direction: 'right',
    speed: 2,
  },
  bugs: Array.from({ length: INITIAL_BUGS }, () => ({
    x: getRandomPosition(GRID_SIZE) * CELL_SIZE,
    y: getRandomPosition(GRID_SIZE) * CELL_SIZE,
    direction: 'right',
    speed: 1,
  })),
  food: Array.from({ length: INITIAL_FOOD }, () => ({
    x: getRandomPosition(GRID_SIZE) * CELL_SIZE,
    y: getRandomPosition(GRID_SIZE) * CELL_SIZE,
  })),
  score: 0,
  gameOver: false,
});

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(createInitialState());

  const moveChicken = useCallback((direction: string) => {
    if (gameState.gameOver) return;
    setGameState((prev) => updateGameState(prev, direction));
  }, [gameState.gameOver]);

  const resetGame = useCallback(() => {
    setGameState(createInitialState());
  }, []);

  return {
    gameState,
    score: gameState.score,
    gameOver: gameState.gameOver,
    moveChicken,
    resetGame,
  };
};