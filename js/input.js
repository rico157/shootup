import Paddle from "./paddle";

export default class InputHandler {
  constructor(paddle) {
    // Listen to keydown
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        // Move left
        case 37:
          paddle.moveLeft();
          break;
        // Move right
        case 39:
          alert("move right");
          break;
      }
    });
  }
}
