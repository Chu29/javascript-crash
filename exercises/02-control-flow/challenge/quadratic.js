"use strict";
const prompt = require("prompt-sync")();

let root1, root2;

// general form of quadratic: ax^2 + bx + c

const a = prompt("Enter first number: ");
const b = prompt("Enter second number: ");
const c = prompt("Enter third number: ");

/**
 * formula: (root1,root2) = (-b ± √b2-4ac)/2a
 * where, (b^2-4ac) = discriminant
 */

// compute and store discriminant
const discriminant = b * b - 4 * a * c;

/**
 * If the discriminant is greater than 0, the roots are real and different.
 * If the discriminant is equal to 0, the roots are real and equal.
 * If the discriminant is less than 0, the roots are complex and different.
 */

if (discriminant > 0) {
  root1 = -b + Math.sqrt(discriminant) / (2 * a);
  root2 = -b - Math.sqrt(discriminant) / (2 * a);

  console.log(
    `The solutions to the given quadratic equation are x=${root1} and x=${root2}`
  );
} else if (discriminant === 0) {
  root1 = root2 = -b / (2 * a);

  console.log(
    `The solution to the given quadratic equation is x=${(root1 = root2)}`
  );
} else {
  const realPart = -b / (2 * a);
  const imagPart = Math.sqrt(-discriminant) / (2 * a);

  console.log(
    `The solution to the given quadratic is ${realPart} + ${imagPart} and ${realPart} - ${imagPart}`
  );
}
