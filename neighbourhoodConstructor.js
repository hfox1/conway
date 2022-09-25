class NeighbourhoodConstructor {
  constructor(board, i, j) {
    this.board = board;
    this.boardWidth = board[0].length;
    this.boardHeight = board.length;
    this.i = i;
    this.j = j;
    this.hood = 'empty initialised neighbourhood';
  }

  neighbourhood() {
    var i = this.i;
    var j = this.j;
    let populatedNeighbourhood = [[], [], []];

    for (let p = 0; p < 3; p++) {
      if (!this.board[j - 1 + p]) {
        //if the row doesnt exist:
        populatedNeighbourhood[p] = [0, 0, 0]; // then neighbourhood row is 000
      } else {
        // if the row exists
        for (let q = 0; q < 3; q++) {
          //look along the three columns
          if (!this.board[j - 1 + p][i - 1 + q]) {
            //if the column doesnt exist
            populatedNeighbourhood[p].push(0);
          } else {
            populatedNeighbourhood[p].push(this.board[j - 1 + p][i - 1 + q]); // push in the neighbour
          }
        }
      }
    }

    populatedNeighbourhood[1][1] = 0; //delete source square
    this.hood = populatedNeighbourhood;
    return populatedNeighbourhood;
  }

  score() {
    if (this.hood === 'empty initialised neighbourhood') {
      throw new Error('tried to score an empty initialised neighbourhood');
    }
    // console.log(this.hood.flat());
    const score = this.hood.flat().reduce((a, b) => a + b, 0); //probably needs to be flatmap.reduce
    return score;
  }
}

module.exports = NeighbourhoodConstructor;

// const letterBoard = [
//   ['a', 'b', 'c', 'd', 'e'], // i
//   ['f', 'g', 'h', 'i', 'j'],
//   ['k', 'l', 'm', 'n', 'o'],
//   ['p', 'q', 'r', 's', 't'],
//   ['u', 'v', 'w', 'y', 'x'],
//   // j
// ];
