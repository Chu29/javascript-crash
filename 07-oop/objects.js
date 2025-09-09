const student = {
  name: "Chu A.",
  age: 22,
  isEnrolled: true,
  courses: ["Math", "Science", "History"],
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};

console.log(student.courses); // Accessing properties using dot notation
console.log(student["age"]); // accessing properties using bracket notation
console.log(typeof student); // object
console.log(student.courses[0]);

student.courses.push("Chemistry");
console.log(student.courses);

student.greet(); // calling method

student.graduate = () => {
  student.graduated = true;
  console.log(student.name + " has graduated");
};

student.graduate(); // calling new method
console.log(student);

let number = "Chu";
console.log(typeof number, number);
let num = parseInt(number);
console.log(typeof num, num);

let deci = "3.14";
console.log(typeof deci, deci);
let floatNum = parseFloat(deci);
console.log(typeof floatNum, floatNum);
