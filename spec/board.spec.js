const Board = require('../board');

describe('Board', () => {
  it('creates a new board of dimensions x,y', () => {
    let b = new Board(2, 3);
    console.log(b);
    expect(b.board.length).toBe(3);
    expect(b.board[0].length).toBe(2);
  });

  //end
});
