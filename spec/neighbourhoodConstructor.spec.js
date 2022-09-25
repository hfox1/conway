// 'Neighbours' off the edge of the board are not functioning neighbours
// A square has a neighbourhood score
const NeighbourhoodConstructor = require('../neighbourhoodConstructor');

describe('NeighbourhoodConstructor', () => {
  const numBoard = [
    [0, 1, 1, 1, 1], // j
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    // i
  ];

  const letterBoard = [
    ['a', 'b', 'c', 'd', 'e'], // i
    ['f', 'g', 'h', 'i', 'j'],
    ['k', 'l', 'm', 'n', 'o'],
    ['p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'y', 'x'],
    // j
  ];

  it('returns a neighbourhood (from middle of board)', () => {
    let neighbourhoodConstructor = new NeighbourhoodConstructor(letterBoard, 3, 2); // origin square "n"
    // expect:
    // hij
    // m0o
    // rst
    let neighbours = neighbourhoodConstructor.neighbourhood();
    expect(neighbours[0][0]).toBe('h');
    expect(neighbours[0][1]).toBe('i');
    expect(neighbours[0][2]).toBe('j');
    expect(neighbours[1][0]).toBe('m');
    expect(neighbours[1][1]).toBe(0);
    expect(neighbours[1][2]).toBe('o');
    expect(neighbours[2][0]).toBe('r');
    expect(neighbours[2][1]).toBe('s');
    expect(neighbours[2][2]).toBe('t');
  });

  it('set neighbours off the edge of the board to 0', () => {
    // expect:
    // 000
    // a0c
    // fgh
    let neighbourhoodConstructor = new NeighbourhoodConstructor(letterBoard, 1, 0); // origin square is "b"
    let neighbours = neighbourhoodConstructor.neighbourhood();
    expect(neighbours[0][0]).toBe(0);
    expect(neighbours[0][1]).toBe(0);
    expect(neighbours[0][2]).toBe(0);
    expect(neighbours[1][0]).toBe('a');
    expect(neighbours[1][1]).toBe(0);
    expect(neighbours[1][2]).toBe('c');
    expect(neighbours[2][0]).toBe('f');
    expect(neighbours[2][1]).toBe('g');
    expect(neighbours[2][2]).toBe('h');
  });

  it('returns correct score mid-board', () => {
    let neighbourhoodConstructor = new NeighbourhoodConstructor(numBoard, 2, 2);
    let neighbours = neighbourhoodConstructor.neighbourhood();
    expect(neighbours[0][0]).toBe(0);
    expect(neighbours[0][1]).toBe(0);
    expect(neighbours[0][2]).toBe(0);
    expect(neighbours[1][0]).toBe(1);
    expect(neighbours[1][1]).toBe(0);
    expect(neighbours[1][2]).toBe(1);
    expect(neighbours[2][0]).toBe(0);
    expect(neighbours[2][1]).toBe(0);
    expect(neighbours[2][2]).toBe(0);
    expect(neighbourhoodConstructor.score()).toBe(2);
  });

  it('returns correct score from board edge', () => {
    let neighbourhoodConstructor = new NeighbourhoodConstructor(numBoard, 4, 0);
    let neighbours = neighbourhoodConstructor.neighbourhood();
    expect(neighbours[0][0]).toBe(0);
    expect(neighbours[0][1]).toBe(0);
    expect(neighbours[0][2]).toBe(0);
    expect(neighbours[1][0]).toBe(1);
    expect(neighbours[1][1]).toBe(0);
    expect(neighbours[1][2]).toBe(0);
    expect(neighbours[2][0]).toBe(0);
    expect(neighbours[2][1]).toBe(0);
    expect(neighbours[2][2]).toBe(0);
    expect(neighbourhoodConstructor.score()).toBe(1);
  });
  //end
});
