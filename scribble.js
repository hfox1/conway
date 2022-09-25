// old code 

rawNeighbourhood() {
  var i = this.i;
  var j = this.j;
  // in index notation, a change of first index changes j coordinate, a change of second changes i
  const rawNeighbourArray = [
    [
      this.board[j - 1][i - 1],
      this.board[j - 1][i],
      this.board[j - 1][i + 1],
    ],
    [this.board[j][i - 1], this.board[j][i + 1]],
    [
      this.board[j + 1][i - 1],
      this.board[j + 1][i],
      this.board[j + 1][i + 1],
    ],
  ];
  return rawNeighbourArray;
}

sanitiseNeighbourhood(rawNeighbourhood) {
  if (this.i === 0) {
    for (let k = 0; k < 3; k++) {
      rawNeighbourhood[k][0] = 0;
    }
  } else if (this.i === this.boardWidth - 1) {
    for (let k = 0; k < 3; k++) {
      rawNeighbourhood[k][2] = 0;
    }
  } else if (this.j === 0) {
    for (let k = 0; k < 3; k++) {
      rawNeighbourhood[0][k] = 0;
    }
  } else if (this.j === this.boardHeight - 1) {
    for (let k = 0; k < 3; k++) {
      rawNeighbourhood[2][k] = 0;
    }
  }

  return rawNeighbourhood;
}
