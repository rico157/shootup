import InputHandler from "./input.js";
import Paddle from "./paddle.js";
import Ball from "./ball.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
  }

  // Methods
  start() {
    // New instances
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    new InputHandler(this.paddle);

    this.gameObjects = [this.ball, this.paddle];
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx));
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime));
  }
}
