export function detectCollision(ball, gameObject) {
  // Ball
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  // Object
  let topOfObject = gameObject.position.y;
  let rightSideObject = gameObject.position.x + gameObject.width;
  let leftSideObject = gameObject.position.x;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideObject &&
    ball.position.x + ball.size <= rightSideObject
  ) {
    return true;
  } else {
    return false;
  }
}
