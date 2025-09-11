let name = new String("Alice");

let age = new Number(22);
let isStudent = new Boolean(true);

// creating a constructor

class Student {
  constructor(name, age, isEnrolled, courses) {
    this.name = name;
    this.age = age;
    this.isEnrolled = isEnrolled;
    this.courses = courses;
  }
}

let chu = new Student("Chu Wong", 22, true, ["Mathematics", "Physics"]);
console.log(typeof chu, chu);

let vincent = new Student("Vincent Lee", 25, false, ["Biology", "Chemistry"]);
console.log(typeof vincent, vincent);

let victor = new Student("Victor Wong", 12, true, [
  "Computer Science",
  "Economics",
]);
console.log(typeof victor, victor);

Student.prototype.graduated = false;
Student.prototype.graduated = function () {
  this.graduated = true;
  console.log(this.name + " has graduated");
};

chu.graduated();
console.log(chu);
