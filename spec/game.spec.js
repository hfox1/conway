const game = require('../game.js');

// This is a first implementation of testing: tests of all gameplay functions.
// Currently end-to-end testing is manual playtesting.
// Next will be automated end-to-end testing mocking CLI user input

describe('Game, and its CLI behaviour', () => {
  const log = console.log;
  beforeEach(() => {
    console.log = jest.fn();
  });
  afterAll(() => {
    console.log = log;
  });
  xit('no log', () => {
    // placeholder test waiting to add functionality that doesnt log
    expect(console.log).not.toHaveBeenCalled();
  });
  it('prints demo board for the user', () => {
    game.demoBoard();
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        '[[0, 1, 1, 1, 1],[0, 0, 0, 0, 0],[0, 1, 1, 1, 0],[0, 0, 0, 0, 0],[1, 1, 1, 1, 1]]'
      )
    );
  });
  it('says "starting board will be:" and stores board ', () => {
    game.startingBoardPrompt();
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        'Please enter a starting board in above format - you may increase the dimensions as you wish \n'
      )
    );
  });
  it('catches starting board format errors', () => {});
  it('logs the evolution of the board', () => {});

  // const message = console.log.mock.calls[0][0];
  // log(message);
});
