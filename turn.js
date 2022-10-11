const NeighbourhoodConstructor = require('./neighbourhoodConstructor.js');
const Board = require('./board.js');

class Turn {
  constructor(board) {
    this.board = board;
  }

  next() {
    let width = this.board[0].length;
    let height = this.board.length;
    let boardObj = new Board(width, height);
    let newBoard = boardObj.board;

    // so this is constructing a new neighbourhood at every square, iterating over the board
    // that's ok but it's a double for loop inside a double for loop which is horrific
    // there must be some better structure

    //probs best to fix this before implementing the top level Game interface

    for (var j = 0; j < height; j++) {
      for (var i = 0; i < width; i++) {
        let square = new NeighbourhoodConstructor(this.board, i, j);
        square.neighbourhood();
        let score = square.score();
        if (square.initialValue === 1) {
          score === 2 || score === 3 ? (newBoard[j][i] = 1) : (newBoard[j][i] = 0);
        } else {
          score === 3 ? (newBoard[j][i] = 1) : (newBoard[j][i] = 0);
        }
      }
    }
    return newBoard;
  }
}
module.exports = Turn;
