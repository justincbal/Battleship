import Player from "./player";

var playerName;

// Apply grid items
const board = document.querySelectorAll(".board");
let horizontal = false;

// Create grid items
board.forEach((bd) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      const coord = `${i}-${j}`;
      div.classList.add("cell", `${coord}`);
      div.id = coord;
      div.textContent = coord;
      bd.append(div);
    }
  }
});

// Menu buttons
const menu = document.querySelector(".menu");
const menuOptions = document.querySelectorAll(".menuOption");
menuOptions.forEach((option) => {
  option.addEventListener("click", () => {
    console.log("click");
    // Delete menu items
    while (menu.firstChild) menu.removeChild(menu.firstChild);
    // Create new fields
    const h2 = document.createElement("h2");
    h2.classList.add("white", "bold");
    h2.textContent = "Project: Battleship";
    menu.append(h2);
    //
    const p = document.createElement("p");
    p.classList.add("white", "menuMessage");
    p.textContent = "Enter player name:";
    menu.append(p);
    //
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("pName");
    menu.append(input);
    //
    const sub = document.createElement("button");
    sub.classList.add("submit", "menuOption");
    sub.textContent = "Submit";
    menu.append(sub);
    sub.addEventListener("click", () => {
      const main = document.querySelector(".main");
      const inputVal = document.querySelector(".pName");
      playerName = inputVal.value;
      main.classList.toggle("blur");
      menu.style.display = "none";
      setup();
    });
  });
});

// Place ship hover highlight

/*
  Setup:
    1. Player created
    2. Board created for specific player
    3. Have player place 5 ships on board
    4. Board created for player 2 or computer
      a. if computer randomize positions
    5. Once all ships are placed start game
  Game:
    1. Loop through turns to take a shot at a coordinate
      a. Hit or miss record position
      b. Sink ship if hit enough times
    2. First player to sink all opponants ships wins
*/

function setup() {
  const playerOne = Player(playerName);
  const gameMessage = document.querySelector(".gameMessage");
  gameMessage.textContent = "! Place your ships !";
  
}


