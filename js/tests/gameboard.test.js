const { Gameboard } = require("../gameboard");
const { Ship } = require("../ship");

describe("Gameboard test functions", () => {
  test("Gameboard is created", () => {
    const board = Gameboard();
    expect(board.board).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });

  test("Place ship horizontally", () => {
    const board = Gameboard();
    const sub = Ship(3, "sub");
    board.placeShip(0, 0, sub.shipLength, true, sub.shipName);
    expect(board.board).toEqual([
      ["sub", "sub", "sub", null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });

  test('Place ship vertically', () => {
    const board = Gameboard();
    const sub = Ship(3, 'sub');
    board.placeShip(0,0, sub.shipLength, false, sub.shipName);
    expect(board.board).toEqual([
      ['sub', null, null, null, null, null, null, null, null, null],
      ['sub', null, null, null, null, null, null, null, null, null],
      ['sub', null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null]
    ]);
  })

  test('Hit the sub', () => {
    const board = Gameboard();
    const sub = Ship(3, 'sub');
    board.placeShip(0,0, sub.shipLength, false, sub.shipName);
    
  })
});
