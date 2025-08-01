"use strict";
/**
 * There are three main ways to create a variable in javascript.
 *
 * 1) var: var was used in the older ECMASCRIPT specific and is now depricated
 * 2) let: let provides a feature called variable scope
 * 3) const: const is used to declare variables whose values do not change throughout the program life time.
 */
let message = "Welcome to JaveScript variables! ";
console.log(`Message before: ${message}`);

message = "Chu theProgrommer";
console.log(`Message after: ${message}`);

// Working with Strings

/**
 * There are tree main ways of using strings in javascript
 * 1) singleQuotes '': Example => const name = 'Chu'
 * 2) doubleQuotes "": Example => const name = "Chu"
 * 3) backticks ``   : Example => const name = `Chu`
 *
 *NB: The backticks string allows for complex string operations such as *embeding variables within the string.
 */

let firstName = "Chu";
let greet = `Hello, ${firstName}`;

console.log(`${greet}`);

// Working with Numbers
/**
 * JaveScript is not a typed language. That is to say, you don't need to *specify the type of the variable you create as it does it automatically for us
 */

let num1 = 10;
let num2 = 20;
let result = num1 + num2;
console.log(`Sum of ${num1} + ${num2} = ${result}`);

// Working with booleans
/**
 * Booleans are a data type which can have only two states.
 * => true or false
 */

let isAge = true;

console.log(`${isAge}`);

isAge = 12;

if (isAge >= 20) {
  console.log(`You are now eligible to vote`);
} else {
  console.log(`Pass go house`);
}
