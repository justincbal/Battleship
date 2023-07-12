const Ship = (length, name) => {
  return {
    shipLength: length,
    shipName: name,
    damage: 0,
    hit: function() {
      this.damage++;
    },
    isSunk: function() {
      return this.damage === this.shipLength ? true : false;
    },
  };
};

module.exports = {Ship}