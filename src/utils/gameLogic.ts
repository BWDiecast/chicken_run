import { GameState } from '../types/game';
import { CELL_SIZE, GRID_SIZE } from '../constants/gameConfig';
import { checkCollision } from './gameUtils';

export const updateGameState = (state: GameState, direction: string): GameState => {
  const { chicken, bugs, food, score, gameOver } = state;

  if (gameOver) return state;

  // Update chicken position
  let newX = chicken.x;
  let newY = chicken.y;

  switch (direction) {
    case 'ArrowUp':
      newY = Math.max(0, chicken.y - chicken.speed);
      break;
    case 'ArrowDown':
      newY = Math.min(GRID_SIZE * CELL_SIZE - CELL_SIZE, chicken.y + chicken.speed);
      break;
    case 'ArrowLeft':
      newX = Math.max(0, chicken.x - chicken.speed);
      break;
    case 'ArrowRight':
      newX = Math.min(GRID_SIZE * CELL_SIZE - CELL_SIZE, chicken.x + chicken.speed);
      break;
  }

  const newChicken = {
    ...chicken,
    x: newX,
    y: newY,
    direction: direction.replace('Arrow', '').toLowerCase(),
  };

  // Update bugs
  const newBugs = bugs.map((bug) => {
    const directions = ['up', 'down', 'left', 'right'];
    if (Math.random() < 0.02) {
      bug.direction = directions[Math.floor(Math.random() * directions.length)];
    }

    let bugX = bug.x;
    let bugY = bug.y;

    switch (bug.direction) {
      case 'up':
        bugY = Math.max(0, bug.y - bug.speed);
        break;
      case 'down':
        bugY = Math.min(GRID_SIZE * CELL_SIZE - CELL_SIZE, bug.y + bug.speed);
        break;
      case 'left':
        bugX = Math.max(0, bug.x - bug.speed);
        break;
      case 'right':
        bugX = Math.min(GRID_SIZE * CELL_SIZE - CELL_SIZE, bug.x + bug.speed);
        break;
    }

    return { ...bug, x: bugX, y: bugY };
  });

  // Check collisions
  const newFood = food.filter((f) => !checkCollision(newChicken, f, CELL_SIZE / 2));
  const newScore = score + (food.length - newFood.length) * 10;
  
  const isGameOver = newBugs.some((bug) => checkCollision(newChicken, bug, CELL_SIZE / 2));

  return {
    chicken: newChicken,
    bugs: newBugs,
    food: newFood,
    score: newScore,
    gameOver: isGameOver,
  };
};