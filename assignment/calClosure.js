"use strict";
function cal() {
  return function (operation, num1, num2) {
    try {
      if (operation === "add") {
        return num1 + num2;
      } else if (operation === "multiply") {
        return num1 * num2;
      } else if (operation === "divide") {
        if (num2 === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
      } else return "Invalid Operation";
    } catch (error) {
      return error.message;
    }
  };
}
