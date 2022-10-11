const Turn = require('../turn.js');

describe('turn', () => {
  it('evolves the board', () => {
    const numBoard = [
      [0, 1, 1, 1, 1], // j
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      // i
    ];
    let turn = new Turn(numBoard);
    let result = turn.next();
    expect(result).toEqual([
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0],
    ]);
  });

  //end
});
