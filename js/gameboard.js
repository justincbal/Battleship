const Gameboard = () => {
  return {
    board: [
      [null, null, null, null, null, null, null, null, null, null], // 0
      [null, null, null, null, null, null, null, null, null, null], // 1
      [null, null, null, null, null, null, null, null, null, null], // 2
      [null, null, null, null, null, null, null, null, null, null], // 3
      [null, null, null, null, null, null, null, null, null, null], // 4
      [null, null, null, null, null, null, null, null, null, null], // 5
      [null, null, null, null, null, null, null, null, null, null], // 6
      [null, null, null, null, null, null, null, null, null, null], // 7
      [null, null, null, null, null, null, null, null, null, null], // 8
      [null, null, null, null, null, null, null, null, null, null], // 9
    ],

    missedShots: [],

    placeShip: function (row, col, len, isHorizontal, ship) {
      if (isHorizontal) {
        for (let i = 0; i < len; i++) {
          this.board[row][col++] = ship;
        }
      } else {
        for (let i = 0; i < len; i++) {
          this.board[row++][col] = ship;
        }
      }
    },

    recieveAttack: function(row, col) {
      if(this.board[row][col] === null) {
        this.missedShots.push([row,col]);
        return false;
      }
      else {
        
      }
    }
  };
};

module.exports = { Gameboard };
