import Paddle from "./paddle.js";
import Game from "./game.js";
export default class InputHandler {
  constructor(paddle, game) {
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
