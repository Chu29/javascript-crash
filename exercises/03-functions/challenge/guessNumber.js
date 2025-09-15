const ranNum = Math.trunc(Math.random() * 100 + 1);
const prompt = require("prompt-sync")();

const input = prompt("Guess a number between 0 - 100: ");
if (input == ranNum) {
  console.log("You guessed that right!");
} else {
  console.log("Sorry :(. Try next time");
}
