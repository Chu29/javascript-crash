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

// switch statements

switch (input) {
  case '1':
    console.log("one");
    break;
  case '2':
    console.log("two");
    break;
   case '3':
    console.log("three");
    break;
  case '-1':
  case '-2':
  case '-3':
  case '-4':
    console.log("negative numbers");
    break;
  default:
    console.log("other number");
    break;
}