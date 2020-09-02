import Bullet from "./bullet.js";
export default class Ship {
  // Set parameters for gameW and gameH
  constructor(game) {
    this.image = document.getElementById("img_ship");

    this.gameWidth = game.gameWidth;
    this.game = game;

    // this.size = 150;
    // this.height = 30;
    // this.bullet = game.bullet;
    // Speed
    this.maxSpeed = 7;
    this.speed = 0;
    // Set x, y positions
    this.size = 60;
    this.position = {
      x: game.gameWidth / 2 - this.size / 2,
      y: game.gameHeight - this.size - 35,
    };
  }

  // Methods
  shoot() {
    this.game.gameObjects.push(this.game.bullet);
    console.log("shoot");
    //
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = +this.maxSpeed;
  }
  stop() {
    this.speed = 0;
  }
  // Pass the context to the draw method
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
  update(deltaTime) {
    this.position.x += this.speed;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.size > this.gameWidth)
      this.position.x = this.gameWidth - this.size;
  }
}
