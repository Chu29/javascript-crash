"use strict";
//  FUNCTIONS

/**
 * Functions in javascript are another important concept of the language.
 * They help us to write code that can be used to perform a particular task.
 *
 * When working with functions, we need to take note of two important
 * steps
 *
 * -> Function Delcaration: This step creates or defines our function
 * -> Function Call: This step executes our function
 *
 */

//function decaration
function square(number) {
  return number * number;
}

square(5); // function call

const result = square(5);
console.log(`Using function Declaration, Square is: ${result}`);

console.log(``);
//function expression
let add = function (num1, num2) {
  return num1 + num2;
};

const sum = add(2, 10);
console.log(`Using function Expression, Sum is: ${sum}`);

console.log(``);
//Arrow functions
let mul = (num1, num2) => {
  return num1 * num2;
};

const pdt = mul(10, 2);
console.log(`Using Arrow function, Product is: ${pdt}`);
