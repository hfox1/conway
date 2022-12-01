const prompt = require('prompt-sync')({ sigint: true });
const Turn = require('./turn');

const demoBoard = () => {
  console.log(
    '[[0, 1, 1, 1, 1],[0, 0, 0, 0, 0],[0, 1, 1, 1, 0],[0, 0, 0, 0, 0],[1, 1, 1, 1, 1]]'
  );
};

const startingBoardPrompt = () => {
  prompt(
    'Please enter a starting board in above format - you may increase the dimensions as you wish \n'
  );
};

demoBoard();

exports.demoBoard = demoBoard;
exports.startingBoardPrompt = startingBoardPrompt;
