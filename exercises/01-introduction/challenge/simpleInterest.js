const simpleInterestCalc = (P, R, T) => {
  return (P * R * T) / 100
}

let result = simpleInterestCalc(50000, 3.5, 3)

console.log(result);