function* fibonacciGenerator(number) {
  let a, b;
  [a, b] = [0, 1];
  for (let i = 0; i < number; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacciGenerator(5);

console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
