import axios from "axios";

// let api = "http://roll.diceapi.com/json/";

function rolld20() {
  let roll = Math.floor(Math.random() * 20);
  return roll;
}
export default rolld20;
