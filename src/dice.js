function rolld20() {
  let roll = Math.floor(Math.random() * 20);
  if (roll === 0) roll = 1;
  return roll;
}
export default rolld20;
