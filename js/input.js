import Ship from "./ship.js";
import Game from "./game.js";
export default class InputHandler {
  constructor(ship, game) {
    //Audio
    this.shootSound = document.getElementById("shootSound");
    shootSound.volume = 0.2;

    this.button = {
      pauseButton: document.getElementById("pauseButton"),
      startButton: document.getElementById("startButton"),
      leftButton: document.getElementById("leftButton"),
      rightButton: document.getElementById("rightButton"),
    };

    // <--- On Screen Controls --->

    // ### Touch ###
    this.button.pauseButton.addEventListener("touchstart", () => {
      game.togglePause();
      game.bgmusic.pause();
    });
    this.button.startButton.addEventListener("touchstart", () => {
      game.start();
      ship.shoot();
    });
    this.button.leftButton.addEventListener("touchstart", () => {
      ship.moveLeft();
    });
    this.button.leftButton.addEventListener("touchend", () => {
      if (ship.speed < 0) ship.stop();
    });
    this.button.rightButton.addEventListener("touchstart", () => {
      ship.moveRight();
    });
    this.button.rightButton.addEventListener("touchend", () => {
      if (ship.speed > 0) ship.stop();
    });

    // ### Mouse ###
    this.button.pauseButton.addEventListener("mousedown", () => {
      game.togglePause();
      game.bgmusic.pause();
    });
    this.button.startButton.addEventListener("mousedown", () => {
      game.start();
      ship.shoot();
    });
    this.button.leftButton.addEventListener("mousedown", () => {
      ship.moveLeft();
    });
    this.button.leftButton.addEventListener("mouseup", () => {
      if (ship.speed < 0) ship.stop();
    });
    this.button.rightButton.addEventListener("mousedown", () => {
      ship.moveRight();
    });
    this.button.rightButton.addEventListener("mouseup", () => {
      if (ship.speed > 0) ship.stop();
    });

    // <--- Keys Controls --->

    // ### Keyboard ###
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          ship.moveLeft();
          break;
        case 39:
          ship.moveRight();
          break;
        case 32:
          ship.shoot();
          game.start();
          break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        // Move left
        case 37:
          if (ship.speed < 0) ship.stop();
          break;
        // Move right
        case 39:
          if (ship.speed > 0) ship.stop();
          break;
        // Pause
        case 27:
          break;
      }
    });
  }
}
