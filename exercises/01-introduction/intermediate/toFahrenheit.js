let toFahrenheit = (tmp) => {
  return (tmp * 9/5) + 32
}

let result = toFahrenheit(0)
let unit = 'C'

console.log(`${result}\u00B0${unit}`);