import InputHandler from "./input.js";
import Ship from "./ship.js";
import Brick from "./brick.js";
import Bullet from "./bullet.js";
import { buildLevel, level1 } from "./levels.js";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.gamestate = GAMESTATE.MENU;
    this.gameObjects = [];
    // New instances
    this.ship = new Ship(this);
    this.bullets = [];

    new InputHandler(this.ship, this);
    this.lives = 3;

    this.bgmusic = document.getElementById("bgmusic");
  }

  // Methods
  start() {
    this.bgmusic.volume = 0.2;
    this.bgmusic.play();
    this.bgmusic.loop = true;
    if (this.gamestate === GAMESTATE.PAUSED) this.gamestate = GAMESTATE.RUNNING;
    if (this.gamestate !== GAMESTATE.MENU) return;

    let bricks = buildLevel(this, level1);

    this.gameObjects = [this.ship, ...bricks];

    this.gamestate = GAMESTATE.RUNNING;
  }

  update(deltaTime) {
    if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;

    if (
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER
    )
      return;
    // Call update for each object
    this.gameObjects.forEach((object) => object.update(deltaTime));
    // Filter the not marked for deletion
    this.gameObjects = this.gameObjects.filter(
      (object) => !object.markForDeletion
    );

    // this.gameObjects.forEach((object) => {
    //   if (object.markForDeletion) {
    //     object.width -= 10;
    //     object.height -= 10;
    //     object.position.x += 5;
    //     object.position.y += 5;
    //     object.markForDeletion = false;
    //   }
    // });
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 600, 600);
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Lives: " + this.lives, this.gameWidth - 70, 30);

    this.gameObjects.forEach((object) => object.draw(ctx));

    // Pause shade and text
    if (this.gamestate === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
    }

    if (this.gamestate === GAMESTATE.MENU) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,1";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Press START", this.gameWidth / 2, this.gameHeight / 2);
    }

    if (this.gamestate === GAMESTATE.GAMEOVER) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,1";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("GAMEOVER", this.gameWidth / 2, this.gameHeight / 2);
    }
  }

  togglePause() {
    // if (this.gamestate === GAMESTATE.PAUSED) {
    //   this.gamestate = GAMESTATE.RUNNING;
    // } else {
    this.gamestate = GAMESTATE.PAUSED;
    // }
  }
}
