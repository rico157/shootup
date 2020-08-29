export default class Paddle {
  // Set parameters for gameW and gameH
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;

    this.width = 150;
    this.height = 30;

    // Speed
    this.maxSpeed = 7;
    this.speed = 0;
    // Set x, y positions
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    };
  }

  // Methods
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
    ctx.fillStyle = "0ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x += this.speed;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
  }
}
