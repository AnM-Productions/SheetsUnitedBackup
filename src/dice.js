import axios from "axios";

// let api = "http://roll.diceapi.com/json/";

// NOTE: currently having issues calling the above API. I am getting
// Network errors, though other URLs are called fine.
function rolld20(intro, modifier) {
  let roll = Math.floor(Math.random() * 20);
  return `${intro}: ${roll} + ${modifier} = ${roll + modifier}`;
}
export default rolld20;
