import InputHandler from "./input.js";
import Paddle from "./paddle";
// Get the canvas from id
let canvas = document.getElementById("gameScreen");
// Create the context
let ctx = canvas.getContext("2d");

// Default WIDTH and HEIGHT
const GAME_WITDTH = 800;
const GAME_HEIGHT = 600;

// New instance of paddle
let paddle = new Paddle(GAME_WITDTH, GAME_HEIGHT);
// Invoke draw method passing the content as argument

new InputHandler(paddle);

// Updated in gameLoop
let lastTime = 0;
//            pass the timeStamp
function gameLoop(timeStamp) {
  // dt --> time less time of last frame
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);
  // When next frame is ready, call gameLoop again
  requestAnimationFrame(gameLoop);
}

gameLoop();
