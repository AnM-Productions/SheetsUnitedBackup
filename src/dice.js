import axios from "axios";

// let api = "http://roll.diceapi.com/json/";

// function rolld20() {
//   // First get result of roll d20 from diceful API result is in dice.value
//   const url = api + "d20";
//   async function getRoll(url) {
//     let dice = await axios
//       .get(url)
//       .catch((temp) => {
//         console.log(`Error getting data from ${url}`);
//         temp = [];
//       });
//     return dice;
//   }
//   let roll = getRoll(url);
//   console.log(roll)
//   console.log(roll.dice.value);
//   return roll;
// }
// NOTE: currently having issues calling the above API. I am getting
// Network errors, though other URLs are called fine.
function rolld20(intro, modifier) {
  let roll = Math.floor(Math.random() * 20);
  return `${intro}: ${roll} + ${modifier} = ${roll + modifier}`;
}
export default rolld20;
