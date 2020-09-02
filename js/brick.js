import { detectCollision } from "./collisionDetection.js";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");
    this.width = 80;
    this.height = 40;

    this.game = game;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.position = position;
    this.markForDeletion = false;
  }

  // Methods
  update() {
    if (detectCollision(this.game.bullet, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markForDeletion = true;
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
