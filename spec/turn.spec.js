const turn = require('../turn');

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
    let turn = new Turn(numboard);
    let result = turn.next();
    expect(result).toBe([
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 1, 1, 1, 0],
    ]);
  });

  //end
});
