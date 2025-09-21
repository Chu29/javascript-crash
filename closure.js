// function greet(name) {
//   function displayName() {
//     console.log("Hello " + name);
//   }
//   displayName();
// }

// greet("John");

// example 1 on closures
function greetNew(name) {
  function displayName() {
    console.log("Hello, " + name);
  }
  return displayName;
}

const g1 = greetNew("Vincent");
g1();

// example 2 on closures
function greetAnother() {
  const name = "Bob";
  return function () {
    console.log("Hello, " + name);
  };
}

const g2 = greetAnother();
g2();

// another example of closures
function cal(x) {
  return function multiply(y) {
    return x * y;
  };
}

// console.log(cal(5)(4));
const multiplyBy3 = cal(3);

console.log(multiplyBy3(6));

// js data privacy with closures
function sum() {
  let a = 0;
  function increaseSum() {
    return (a += 1);
  }
  return increaseSum;
}

const x = sum();

// for (let i = 0; i < 10; i++) {
//   console.log(x());
// }
