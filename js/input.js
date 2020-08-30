import Paddle from "./paddle.js";
import Game from "./game.js";
export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener(
      "touchstart",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
    let leftButton = document.getElementById("leftButton");
    let rightButton = document.getElementById("rightButton");
    // Touch
    leftButton.addEventListener("touchstart", () => {
      paddle.moveLeft();
    });
    leftButton.addEventListener("touchend", () => {
      if (paddle.speed < 0) paddle.stop();
    });
    rightButton.addEventListener("touchstart", () => {
      paddle.moveRight();
    });
    rightButton.addEventListener("touchend", () => {
      if (paddle.speed > 0) paddle.stop();
    });
    // Mouse
    leftButton.addEventListener("mousedown", () => {
      paddle.moveLeft();
    });
    leftButton.addEventListener("mouseup", () => {
      if (paddle.speed < 0) paddle.stop();
    });
    rightButton.addEventListener("mousedown", () => {
      paddle.moveRight();
    });
    rightButton.addEventListener("mouseup", () => {
      if (paddle.speed > 0) paddle.stop();
    });

    // Listen to keydown
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        // Move left
        case 37:
          paddle.moveLeft();
          break;
        // Move right
        case 39:
          paddle.moveRight();
          break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        // Move left
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
        // Move right
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
        // Pause
        case 27:
          game.togglePause();
          break;
      }
    });
  }
}
