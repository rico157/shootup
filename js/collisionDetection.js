export function detectCollision(bullet, gameObject) {
  // Ball
  // let bottomOfBall = ball.position.y + ball.size;
  let topOfBullet = bullet.y;

  // Object
  let topOfObject = gameObject.position.y;
  let rightSideObject = gameObject.position.x + gameObject.width;
  let leftSideObject = gameObject.position.x;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  if (
    bullet.y <= bottomOfObject &&
    bullet.x >= leftSideObject &&
    bullet.x + bullet.width <= rightSideObject
  ) {
    return true;
  } else {
    return false;
  }
}
