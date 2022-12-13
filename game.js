const prompt = require('prompt-sync')({ sigint: false });
const Turn = require('./turn');

// helper function for buggy package
const multiLinePrompt = (ask) => {
  const lines = ask.split(/\r?\n/);
  const promptLine = lines.pop();
  console.log(lines.join('\n'));
  return prompt(promptLine);
};

console.log(
  '[[0, 1, 1, 1, 1],[0, 0, 0, 0, 0],[0, 1, 1, 1, 0],[0, 0, 0, 0, 0],[1, 1, 1, 1, 1]]'
);

let stringBoard = multiLinePrompt(
  "Please enter a starting board in above format - you may change the dimensions as you wish. \n The smallest board allowed is [[1]] \n\n To use the same board as above, enter 's'\n"
);
if (stringBoard.toUpperCase() == 'S') {
  stringBoard =
    '[[0, 1, 1, 1, 1],[0, 0, 0, 0, 0],[0, 1, 1, 1, 0],[0, 0, 0, 0, 0],[1, 1, 1, 1, 1]]';
}
let startingBoard = eval(stringBoard);

console.log('Your starting board will be: \n', startingBoard);

let input = multiLinePrompt('Evolve? (Y/N)\n');
if (input.toUpperCase() == 'N') {
  console.log('Thanks for playing!');
  return;
}

let board = startingBoard;

while (input.toUpperCase() == 'Y') {
  let turn = new Turn(board);
  board = turn.next();

  input = multiLinePrompt('Evolve? (Y/N)\n');
  if (input.toUpperCase() == 'N') {
    console.log('Thanks for playing!');
    break;
  }
}
