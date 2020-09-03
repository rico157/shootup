import Game from "./game.js";
// Get the canvas from id
let canvas = document.getElementById("gameScreen");
// Create the context
let ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 600, 600);

// Default WIDTH and HEIGHT
const GAME_WITDTH = 600;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WITDTH, GAME_HEIGHT);
game.start();

// Updated in gameLoop
let lastTime = 0;

function gameLoop(timeStamp) {
  // dt --> time less time of last frame
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, GAME_WITDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);

  // When next frame is ready, call gameLoop again
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
