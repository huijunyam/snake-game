const Snake = require("./snake.js");
const Apple = require("./apple.js");

class Board {
  constructor(dimension) {
    this.dimension = dimension;
    this.snake = new Snake(this);
    this.apple = new Apple(this);
  }

  validPosition(coord) {
    return (coord.i >= 0) && (coord.j = 0) && (coord.i < this.dimension) &&
    (coord.j < this.dimension);
  }

  
}

module.exports = Board;
