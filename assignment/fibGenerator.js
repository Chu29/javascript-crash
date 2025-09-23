function* fibonacciGenerator() {
  let a = 0,
    b = 1;
  while (true) {
    if (a > 100) return;
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacciGenerator();

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
