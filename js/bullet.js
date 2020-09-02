import { detectCollision } from "./collisionDetection.js";

export default class Bullet {
  constructor(ship, game) {
    this.active = true;
    this.color = "yellow";
    this.yVel = 10;
    this.width = 20;
    this.height = 40;
    this.x = ship.position.x + this.width;
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
    this.y -= this.yVel;
    // if (detectCollision(this, this.game.)) {
    //   this.speed.y = -this.speed.y;
    //   this.position.y = this.position.y - this.size;
    //   console.log("ouijjjjjjjj");
    // }
    // this.active = this.inBounds() && this.active;
  }
}
