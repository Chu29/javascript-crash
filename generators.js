// function* generatorFunc (){
//   yield value
// }

function* genFunc() {
  console.log("1. code before the first yield");

  yield 100;

  console.log("2. code before the second yield");

  yield 200;

  console.log("3. code after the second yield");

  // yield 300;
}

const genObj = genFunc();

console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
