let prompt = require("prompt-sync")();

const input = prompt("Enter a number: ");

if (input <= 1) {
  return console.log("Invalid");
}

for (let i = 2; i < input; i++) {
  if (input % i === 0) {
    return console.log("Not a prime number");
  }
}

return console.log("Prime number");
