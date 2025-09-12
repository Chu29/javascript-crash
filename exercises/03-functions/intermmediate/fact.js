const factorial = (n) => {
  if (n > 1) {
    return n * factorial(n - 1);
  } else return "Factorial is:", n;
};

console.log(factorial(1));
