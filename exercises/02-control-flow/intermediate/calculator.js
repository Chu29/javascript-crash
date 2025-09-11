const calc = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;

    default:
      break;
  }
};

const results = calc(2, "+", 2);
// console.log(results);
