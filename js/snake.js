const Coord = require("./coord.js");

class Snake {
  constructor(board) {
    this.direction = "N";
    this.turning = false;
    this.board = board;
    const start = new Coord(Math.floor(board.dimension/2), Math.floor(board.dimension/2));
    this.segments = [start];
    this.growTurn = 0;
  }

  snakeHead() {
    return this.segments[this.segments.length - 1];
  }

  isOccupied(pos) {
    for (let i = 0; i < this.segments.length; i++){
      if (this.segments[i].i === pos[0] && this.segments[i].j === pos[1]){
        return true;
      }
    }
    return false;
  }

  isValid() {
    if (!this.board.validPosition(this.snakeHead())) {
      return false;
    }
    for (let i = 0; i < this.segments.length - 1; i++) {
      if (this.segments[i].equals(this.snakeHead())) {
        return false;
      }
    }
    return true;
  }

  move() {
    let newSegment = this.snakeHead().plus(Snake.DIRECTION[this.direction]);
    this.segments.push(newSegment);
    this.turning = false;
    if (this.eatApple()) {
      this.board.apple.generateApple();
    }
    if (this.growTurn > 0) {
      this.growTurn -= 1;
    } else {
      this.segments.shift();
    }
    if (!this.isValid()) {
      this.segments = [];
    }
  }

  turn(direction) {
    if (Snake.DIRECTION[this.direction].isOpposite(Snake.DIRECTION[direction]) ||
      this.turning) {
        return;
    } else {
      this.turning = true;
      this.direction = direction;
    }
  }

  eatApple() {
    if (this.snakeHead().equals(this.board.apple.position)) {
      this.growTurn += 3;
      return true;
    } else {
      return false;
    }
  }
}

Snake.DIRECTION = {
    "N": new Coord(0, 1),
    "E": new Coord(1, 0),
    "S": new Coord(0, -1),
    "W": new Coord(-1, 0)
};

module.exports = Snake;
