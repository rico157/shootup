import InputHandler from "./input.js";
import Paddle from "./paddle.js";
import Ball from "./ball.js";
import Brick from "./brick.js";
import { buildLevel, level1 } from "./levels.js";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
  }

  // Methods
  start() {
    this.gamestate = GAMESTATE.RUNNING;
    // New instances
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    let bricks = buildLevel(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...bricks];

    new InputHandler(this.paddle, this);
  }

  update(deltaTime) {
    if (this.gamestate === GAMESTATE.PAUSED) return;
    // Call update for each object
    this.gameObjects.forEach((object) => object.update(deltaTime));
    // Filter the not marked for deletion
    this.gameObjects = this.gameObjects.filter(
      (object) => !object.markForDeletion
    );
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx));

    // Pause shade and text
    if (this.gamestate === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
    }
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
}
