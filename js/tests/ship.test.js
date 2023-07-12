const {Ship} = require('../ship.js');

describe("Ship test functions", () => {
  test("Ship hit function", () => {
    const sub = Ship(3, "Sub");
    sub.hit();
    sub.hit();
    sub.hit();
    expect(sub.damage).toEqual(3);
  });

  test('Ship is sunk', ()=> {
    const sub = Ship(3, 'Sub');
    sub.hit();
    sub.hit();
    sub.hit();
    expect(sub.isSunk()).toBeTruthy();
  })
});
