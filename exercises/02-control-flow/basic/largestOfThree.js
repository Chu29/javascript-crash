const largestOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return `${num1} is the largest`;
  } else if (num2 > num1 && num2 > num3) {
    return `${num2} is the largest`;
  } else return `${num3} is the largest`;
};

console.log(largestOfThree(9, 10, 11));
