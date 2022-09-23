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
  var neighbourhood = new Neighbourhood(letterBoard, 3, 2);
// expect:
// hij
// m o
// rst
  var neighbours = neighbourhood.rawNeighbourhood();
  expect(neighbours[0][0]).toBe('h');
  expect(neighbours[0][1]).toBe('i');
  expect(neighbours[0][2]).toBe('j');
  expect(neighbours[1][0]).toBe('m');
  expect(neighbours[1][1]).toBe('o');
  expect(neighbours[2][0]).toBe('r');
  expect(neighbours[2][1]).toBe('s');
  expect(neighbours[2][2]).toBe('t');
});

  it("set neighbours off the edge of the board to 0", () => {
// expect:
// ...
// a c
// fgh
    let hood = new Neighbourhood(testBoard, 1, 0);
    var raw = hood.rawNeighbourhood();
    var neighbours = hood.sanitiseNeighbourhood(raw);
    expect(neighbours[0][0]).toBe(0);
    expect(neighbours[0][1]).toBe(0);
    expect(neighbours[0][2]).toBe(0);
    expect(neighbours[1][0]).toBe('a');
    expect(neighbours[1][1]).toBe('c');
    expect(neighbours[2][0]).toBe('f');
    expect(neighbours[2][1]).toBe('g');
    expect(neighbours[2][2]).toBe('h');    
  });







});