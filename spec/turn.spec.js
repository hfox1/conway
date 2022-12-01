const Turn = require('../turn.js');

describe('turn', () => {
  it('evolves one board', () => {
    const numBoard = [
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
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
  it('evolves a second board', () => {
    const numBoard = [
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
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
  it('catches incorrectly formatted boards', () => {
    const numBoard = [
      [0, 1, 1, 1, 1][(0, 0, 0, 0, 0)],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ];
    expect(() => {
      new Turn(numBoard);
    }).toThrow('incorrectly formatted board');
  });
});
