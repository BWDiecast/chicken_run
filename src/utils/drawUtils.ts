import { GameState } from '../types/game';
import { CELL_SIZE, GRID_SIZE } from '../constants/gameConfig';

export const drawGame = (ctx: CanvasRenderingContext2D, gameState: GameState) => {
  const { chicken, bugs, food } = gameState;
  
  // Clear canvas
  ctx.clearRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);

  // Draw grid
  ctx.strokeStyle = '#1a1a1a';
  for (let i = 0; i <= GRID_SIZE; i++) {
    ctx.beginPath();
    ctx.moveTo(i * CELL_SIZE, 0);
    ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * CELL_SIZE);
    ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE);
    ctx.stroke();
  }

  // Draw chicken
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(
    chicken.x + CELL_SIZE / 2,
    chicken.y + CELL_SIZE / 2,
    CELL_SIZE / 2,
    0,
    Math.PI * 2
  );
  ctx.fill();

  // Draw bugs
  ctx.fillStyle = '#FF0000';
  bugs.forEach((bug) => {
    ctx.beginPath();
    ctx.arc(
      bug.x + CELL_SIZE / 2,
      bug.y + CELL_SIZE / 2,
      CELL_SIZE / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  });

  // Draw food
  ctx.fillStyle = '#00FF00';
  food.forEach((f) => {
    ctx.beginPath();
    ctx.arc(
      f.x + CELL_SIZE / 2,
      f.y + CELL_SIZE / 2,
      CELL_SIZE / 4,
      0,
      Math.PI * 2
    );
    ctx.fill();
  });
};