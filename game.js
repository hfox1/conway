const prompt = require('prompt-sync')({ sigint: true });
const Turn = require('./turn');

console.log(
  '[[0, 1, 1, 1, 1],[0, 0, 0, 0, 0],[0, 1, 1, 1, 0],[0, 0, 0, 0, 0],[1, 1, 1, 1, 1]]'
);

let stringBoard = prompt(
  "Please enter a starting board in above format - you may change the dimensions as you wish. The smallest board allowed is [[1]] \n\n To use the same board as above, enter 's'\n"
);
if (stringBoard.toUpperCase() == 'S') {
  stringBoard =
    '[[0, 1, 1, 1, 1],[0, 0, 0, 0, 0],[0, 1, 1, 1, 0],[0, 0, 0, 0, 0],[1, 1, 1, 1, 1]]';
}
let startingBoard = eval(stringBoard);

console.log('Your starting board will be: \n', startingBoard);

let input = prompt('Evolve? (Y/N)\n');

let board = startingBoard;

while (input.toUpperCase() == 'Y') {
  let turn = new Turn(board);
  board = turn.next();

  input = prompt('Evolve? (Y/N)\n');
  if (input.toUpperCase() == 'N') {
    console.log('The end');
    break;
  }
}
