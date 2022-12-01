const Game = require('../game.js');

describe('Game, and its CLI behaviour', () => {
  const log = console.log;
  beforeEach(() => {
    console.log = jest.fn();
  });
  afterAll(() => {
    console.log = log;
  });
  test('no log', () => {
    expect(console.log).not.toHaveBeenCalled();
  });
  test('some log', () => {
    startingBoardPrompt();
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        '[[0, 1, 1, 1, 1],[0, 0, 0, 0, 0],[0, 1, 1, 1, 0],[0, 0, 0, 0, 0],[1, 1, 1, 1, 1]]'
      )
    );
    const message = console.log.mock.calls[0][0];
    log(message);
  });

  it('says "starting board will be:" and stores board ', () => {});
  it('catches starting board format errors', () => {});
  it('logs the evolution of the board', () => {});
});
