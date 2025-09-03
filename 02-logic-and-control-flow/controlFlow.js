// control flow statements

let prompt = require('prompt-sync')();

const input = prompt('Enter a number: ')
if(input > 0) {
  console.log('Positive');
} else {
  console.log('Non-positive');
  if (input < 0) {
    console.log('Negative');
  } else {
    console.log('Zero');
  }
}
