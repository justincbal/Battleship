import Gameboard  from "./gameboard";

const Player = (pName) => {
  return {
    playerName: pName,
    shipsOnField: 5,
    playerBoard: Gameboard(),
  };
};

export default Player;
