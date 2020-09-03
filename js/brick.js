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
    for (let i = 0; i < this.game.bullets.length; i++) {
      if (detectCollision(this.game.bullets[i], this)) {
        // this.game.ball.speed.y = -this.game.ball.speed.y;
        this.game.bullets[i].y = 1000;
        this.game.bullets[i].speed = 0;
        this.markForDeletion = true;
      }
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
