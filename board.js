class Board {
  constructor(boardwidth, boardheight) {
    let board = new Array(boardheight);
    for (var i = 0; i < boardheight; i++) {
      board[i] = new Array(boardwidth);
    }
    this.board = board;
  }
}

module.exports = Board;
