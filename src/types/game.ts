export interface Position {
  x: number;
  y: number;
}

export interface Chicken extends Position {
  direction: string;
  speed: number;
}

export interface Bug extends Position {
  direction: string;
  speed: number;
}

export interface Food extends Position {}

export interface GameState {
  chicken: Chicken;
  bugs: Bug[];
  food: Food[];
  score: number;
  gameOver: boolean;
}