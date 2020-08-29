export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.game = game;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.size = 20;

    this.position = {
      x: 10,
      y: 10,
    };
    this.speed = {
      x: 8,
      y: 3,
    };
  }

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
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // Collision with right and left walls
    if (this.position.x > this.gameWidth - this.size || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    // Collision with top and bottom walls
    if (this.position.y > this.gameHeight - this.size || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    // Collision with paddle
    let bottomOfBall = this.position.y + this.size;
    let paddle = this.game.paddle.position.y;

    if (bottomOfBall >= paddle) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}