import { detectCollision } from "./collisionDetection.js";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_whale");
    this.width = 60;
    this.height = 60;

    this.game = game;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.position = position;
    this.markForDeletion = false;
  }

  // Methods

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.position.y += 2;

    for (let i = 0; i < this.game.bullets.length; i++) {
      if (detectCollision(this.game.bullets[i], this)) {
        this.game.bullets[i].y = 1000;
        this.game.bullets[i].speed = 0;
        this.game.bullets.splice(i, 1);
        this.markForDeletion = true;
      }
    }
  }
}
