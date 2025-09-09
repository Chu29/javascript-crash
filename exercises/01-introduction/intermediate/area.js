let area = (base, height) => {
  return (base * height) / 2
}

let unit = 'cm'
let result = area(2, 4)

console.log(`${result}${unit}\u00B2`);