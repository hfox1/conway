// 'Neighbours' off the edge of the board are not functioning neighbours  
// A square has a neighbourhood score 
const Neighbourhood = require('../neighbourhood');


describe("Neighbourhood", () => {

  const testBoard = 
[
  [0, 1, 1, 1, 1], // j
  [0, 0, 0, 0, 0], 
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1]
  // i
];

const letterBoard = 
[
  ['a', 'b', 'c', 'd', 'e'], // i
  ['f', 'g', 'h', 'i', 'j'], 
  ['k', 'l', 'm', 'n', 'o'],
  ['p', 'q', 'r', 's', 't'],
  ['u', 'v', 'w', 'y', 'x']
  // j
];

it("returns a neighbourhood (from middle of board)", () => {
  var neighbourhood = new Neighbourhood(letterBoard, 3, 3);
// expect:
// mno
// r t
// wyx
  var neighbours = neighbourhood.rawNeighbourhood();
  expect(neighbours[0][0]).toBe('m');
  expect(neighbours[0][1]).toBe('n');
  expect(neighbours[0][2]).toBe('o');
  expect(neighbours[1][0]).toBe('r');
  expect(neighbours[1][1]).toBe('t');
  expect(neighbours[2][0]).toBe('w');
  expect(neighbours[2][1]).toBe('y');
  expect(neighbours[2][2]).toBe('x');
});

  xit("disallow neighbours off the edge of the board", () => {
    let neighbourhood = new Neighbourhood(testBoard, 1, 0)
  });







});