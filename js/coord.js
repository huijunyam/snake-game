class Coord {
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }

  plus(otherCoord) {
    return new Coord(this.i + otherCoord.i, this.j + otherCoord.j);
  }

  equals(otherCoord) {
    return this.i === otherCoord.i && this.j === otherCoord.j;
  }

  isOpposite(otherCoord) {
    return this.i === (-1 * otherCoord.i) && this.j === (-1 * otherCoord.j);
  }
}

module.exports = Coord;
