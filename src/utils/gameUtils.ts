import { Position } from '../types/game';

export const checkCollision = (obj1: Position, obj2: Position, threshold: number): boolean => {
  const dx = (obj1.x - obj2.x);
  const dy = (obj1.y - obj2.y);
  return Math.sqrt(dx * dx + dy * dy) < threshold;
};

export const getRandomPosition = (gridSize: number): number => {
  return Math.floor(Math.random() * gridSize);
};