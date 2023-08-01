const { Player } = require("../player");

test("Player created", () => {
  const player1 = Player("Justin");
  expect(player1.playerBoard).toBe("Justin");
});
