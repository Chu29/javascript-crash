const toMiles = (distance) => {
  return (distance * 0.62137)
}

let unit = "miles"
let result = toMiles(4)

console.log(`${result} ${unit}`);