const bmi = (weight, height) => {
  return weight / (height * height)
}

const result = bmi(70, 1.70)
console.log(result.toFixed(2));