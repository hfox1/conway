class Neighbourhood {
constructor (board, i ,j) {
  this.board = board
  this.boardWidth = board[0].length;
  this.boardHeight = board.length;
  this.i = i;
  this.j = j;
}

rawNeighbourhood () {
  // // neighbours are defined:
// // nOne  nTwo   nThree 
// // nFour  []    nFive 
// // nSix  nSeven nEight 
  // const nOne = this.board[i-1][j-1];
  // const nTwo = this.board[i][j-1];
  // const nThree = this.board[i+1][j-1];
  // const nFour = this.board[i-1][j];
  // const nFive = this.board[i+1][j];
  // const nSix = this.board[i-1][j+1];
  // const nSeven = this.board[i][j+1] ;
  // const nEight = this.board[i+1][j+1];
  var i = this.i;
  var j = this.j;
  // in index notation, a change of first index changes j coordinate, a change of second changes i
  const rawNeighbourArray = 
  [
    [this.board[i-1][j-1], this.board[i-1][j], this.board[i-1][j+1]],
    [this.board[i][j-1],                         this.board[i][j+1]],
    [this.board[i+1][j-1], this.board[i+1][j],  this.board[i+1][j+1]]
  ]
  return rawNeighbourArray;
}

sanitiseNeighbourhood (rawNeighbourhood) {
    if (this.i === 0) { 
    for (let k = 0; k < this.boardHeight; k++ ) {
      rawNeighbourhood[k][0] = 0;}
    }
  else if (this.i === this.boardWidth - 1) {
    for (let k = 0; k < this.boardHeight; k++ ) {
      rawNeighbourhood[k][this.boardWidth - 1] = 0;}
    }
  else if (this.j === 0) {
    rawNeighbourhood[0] = 0;}
  
  else if (this.j === this.boardHeight - 1) {
   rawNeighbourhood[this.boardHeight - 1] = 0;}
    
    return rawNeighbourhood;
  }
}

module.exports = Neighbourhood

