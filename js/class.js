export default class Paddle {
  // Set parameters for gameW and gameH
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 30;

    // Set x, y positions
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    };
  }

  // Methods
  // Pass the context to the draw method
  draw(ctx) {
    ctx.fillStyle = "0ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x += 5 / deltaTime;
  }
}
