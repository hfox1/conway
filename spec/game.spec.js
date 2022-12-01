const game = require('../game.js');

// This is a first implementation of testing: tests of all gameplay functions.
// Currently end-to-end testing is manual playtesting.
// Next will be automated end-to-end testing mocking CLI user input

jest.mock(
  'prompt-sync',
  () => {
    const mPrompt = jest.fn();
    return jest.fn(() => mPrompt);
  },
  { virtual: true }
);

describe('Game, and its CLI behaviour', () => {
  const log = console.log;
  beforeEach(() => {
    console.log = jest.fn();
  });
  afterAll(() => {
    console.log = log;
  });
  it('no log', () => {
    // placeholder test waiting to add functionality that doesnt log
    expect(console.log).not.toHaveBeenCalled();
  });
  xit('prints demo board for the user', () => {
    game.demoBoard();
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        '[[0, 1, 1, 1, 1],[0, 0, 0, 0, 0],[0, 1, 1, 1, 0],[0, 0, 0, 0, 0],[1, 1, 1, 1, 1]]'
      )
    );
  });
  xit('says "starting board will be:" and stores board ', () => {
    jest.mock('game', () => {
      return { startingBoardPrompt: jest.fn() };
    });
    game.startingBoardPrompt.mockResolvedValueOnce('');
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        'Please enter a starting board in above format - you may increase the dimensions as you wish \n'
      )
    );
  });
  xit("says ' your starting board will be:'", () => {
    game.startingBoardConfirm();
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Your starting board will be: \n')
    );
  });
  it('catches starting board format errors', () => {});
  it('logs the evolution of the board', () => {});

  // const message = console.log.mock.calls[0][0];
  // log(message);
  // let startingBoard = '[[1, 1, 1, 1, 1]]';
});
