const CONSTANTS = {
  GRAVITY: 0.8,
  FLAP_SPEED: -8,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30
};

export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.x = (dimensions.width / 3) ;
    this.y = ( dimensions.height / 2);
    this.gravity = 0.5;

  }

  drawBird(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect((this.x - 20), (this.y - 15) , 40, 30);
    this.moveBird();
  }

  moveBird() {
    this.velocity += CONSTANTS.GRAVITY;
    this.y += this.velocity;
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }
}