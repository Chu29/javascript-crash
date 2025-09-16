const divide = (a, b) => {
  try {
    if (b === 0) throw new Error("Division by zero is prohibited");
    const result = a / b;
    console.log(`The result is ${result}`);
  } catch (error) {
    console.error(`An error occurred ${error.message}`);
  }
};

divide(10, 2);
