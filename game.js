const prompt = require('prompt-sync')({ sigint: true });
const Turn = require('./turn');

const demoBoard = () => {
  console.log(
    '[[0, 1, 1, 1, 1],[0, 0, 0, 0, 0],[0, 1, 1, 1, 0],[0, 0, 0, 0, 0],[1, 1, 1, 1, 1]]'
  );
};

demoBoard();

exports.demoBoard = demoBoard;
