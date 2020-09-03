import { detectCollision } from "./collisionDetection.js";

export default class Bullet {
  constructor(ship, game) {
    this.active = true;
    this.color = "yellow";
    this.speed = 10;
    this.width = 5;
    this.height = 40;
    this.x = ship.position.x + ship.size / 2;
    this.y = ship.position.y - this.height;
    this.game = game;
    this.ship = ship;
    //
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    //
  }

  update(deltaTime) {
    this.y -= this.speed;
    if (this.y < -100) {
      this.y = -100;
    }
    // this.active = this.inBounds() && this.active;
  }
}
