// Apply grid items
const board = document.querySelectorAll(".board");

board.forEach((bd) => {
  for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
      const div = document.createElement('div');
      const coord = `${i}-${j}`;
      div.classList.add('cell',`${coord}`);
      div.textContent = coord;
      bd.append(div);
    }
    
  }
})


// Menu buttons
const menuButton = document.querySelectorAll(".menuOption");
const menu = document.querySelector(".menu");
const main = document.querySelector('.main');
menuButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("CLICK");
    menu.style.display = 'none';
    main.classList.toggle('blur');
  });
});
