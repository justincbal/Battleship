// Apply grid items
const board = document.querySelectorAll(".board");

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < 100; j++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    board[i].append(div);
  }
}
