import Bullet from "./bullet.js";
export default class Ship {
  constructor(game) {
    this.image = document.getElementById("img_ship");
    this.shootSound = document.getElementById("shootSound");

    this.gameWidth = game.gameWidth;
    this.game = game;
    // this.size = 150;
    // this.height = 30;
    // Speed

    this.width = 50;
    this.height = 50;

    this.maxSpeed = 7;
    this.speed = 0;
    // Set x, y positions
    this.size = 60;
    this.position = {
      x: game.gameWidth / 2 - this.size / 2,
      y: game.gameHeight - this.size - 35,
    };
    this.bullet = new Bullet(this);
    this.been = true;
  }

  // Methods

  shoot() {
    this.shootSound.currentTime = 0;
    this.shootSound.play();
    this.bullet = new Bullet(this);
    this.game.gameObjects.push(this.bullet);
    this.game.bullets.push(this.bullet);
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
