import Ship from "./ship.js";
import Game from "./game.js";
export default class InputHandler {
  constructor(ship, game) {
    //Audio
    const shootSound = document.getElementById("shootSound");

    //Controls
    document.addEventListener(
      "touchstart",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );

    document.getElementById("pauseButton").addEventListener("mousedown", () => {
      game.togglePause();
    });
    document
      .getElementById("pauseButton")
      .addEventListener("touchstart", () => {
        game.togglePause();
      });
    document.getElementById("startButton").addEventListener("mousedown", () => {
      game.start();
    });
    document
      .getElementById("startButton")
      .addEventListener("touchstart", () => {
        game.start();
      });

    // LEFT RIGHT BUTTONS
    let leftButton = document.getElementById("leftButton");
    let rightButton = document.getElementById("rightButton");
    // Touch
    leftButton.addEventListener("touchstart", () => {
      ship.moveLeft();
    });
    leftButton.addEventListener("touchend", () => {
      if (ship.speed < 0) ship.stop();
    });
    rightButton.addEventListener("touchstart", () => {
      ship.moveRight();
    });
    rightButton.addEventListener("touchend", () => {
      if (ship.speed > 0) ship.stop();
    });
    // Mouse
    leftButton.addEventListener("mousedown", () => {
      ship.moveLeft();
    });
    leftButton.addEventListener("mouseup", () => {
      if (ship.speed < 0) ship.stop();
    });
    rightButton.addEventListener("mousedown", () => {
      ship.moveRight();
    });
    rightButton.addEventListener("mouseup", () => {
      if (ship.speed > 0) ship.stop();
    });
    // LEFT RIGHT BUTTONS

    // Listen to keydown
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        // Move left
        case 37:
          ship.moveLeft();
          break;
        // Move right
        case 39:
          ship.moveRight();
          break;
        case 32:
          ship.shoot();

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
        case 32:
          break;
      }
    });
  }
}
