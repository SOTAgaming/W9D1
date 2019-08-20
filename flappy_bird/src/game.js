import Level from './level';
import Bird from './bird';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
  }

  animate(ctx) {
    this.level.drawBackground(ctx);
    this.bird.drawBird(ctx);
    requestAnimationFrame(this.animate);
  }

  restart() {
    this.animate(this.ctx);
  }

  play() {
    this.running = true;
    this.animate(this.ctx);
  }
}