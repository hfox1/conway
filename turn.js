const NeighbourhoodConstructor = require('neighbourhoodConstructor');
const Board = require('board');

class Turn {
  constructor(board) {
    this.board = board;
  }

  next (board) {
    let width = board[0].length;
    let height = board.length;
    let newBoard;


    
    
    for (var j = 0; j < height; j++) {
      for (var i = 0; i < width; i++) {
        let square = new NeighbourhoodConstructor(this.board, i, j);
        let score = square.neighbourhood().score();
        if 


      }
    }


  }
}