const Coord = require("./coord.js");

class Snake {
  constructor(board) {
    this.direction = "N";
    this.board = board;
    const start = new Coord(Math.floor(board.dimension/2), Math.floor(board.dimension/2));
    this.segment = [start];
  }

  move() {

  }
}

module.exports = Snake;
