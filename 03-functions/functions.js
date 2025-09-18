function studentList() {
  // fetch students

  return [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bod", age: 22, grade: "B" },
    { name: "Charlie", age: 23, grade: "C" },
    { name: "David", age: 21, grade: "B" },
    { name: "Eve", age: 20, grade: "A" },
  ];
}

// let students = studentList()
// console.log(students);
console.log(studentList());

function greet(name) {
  return `Hello, ${name}!`;
}

greet1("Alice");

function greet1(name) {
  console.log(`Hello, ${name}!`);
}

console.log(greet("Chu"));

function add(num1, num2) {
  return num1 + num2;
}
let result = add(5, 3);
console.log(result);

// es6 or es2015 arrow functions
const square = (x) => {
  return x * x;
};

console.log(square(2));
