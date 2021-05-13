import axios from "axios";

let api = "http://roll.diceapi.com/json/";

function rolld20(modifier) {
  // First get result of roll d20 from diceful API result is in dice.value
  const url = api + "d20";
  async function getRoll(url) {
    await axios
      .get(url)
      .then((temp) => {
        console.log(`.then result: ${temp.dice.value}`);
      })
      .catch((temp) => {
        console.log(`Error getting data from ${url}`);
        temp = [];
      });
  }
  let roll = getRoll(url);
  let result = roll + modifier;
  console.log(`Dice roll: ${roll} + ${modifier} = ${result}`);
  return result;
}
export default rolld20;
