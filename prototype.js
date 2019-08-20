Function.prototype.inherits = function (parent) {
  Surrogate = function() {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {

}

MovingObject.prototype.messages = function() {
  console.log("Hi");
};
function Ship() { }
Ship.inherits(MovingObject);
Ship.prototype.message = function() {
  console.log("I am a ship")
};

function Asteroid() { }
Asteroid.inherits(MovingObject);

object = new MovingObject();
object.messages();
ship = new Ship();
ship.messages();
ship.message();
asteroid = new Asteroid();
asteroid.messages();
