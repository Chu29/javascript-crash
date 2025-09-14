class Person {
  constructor(name) {
    this.name = name;
    this.occupation = "unemployed";
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  scores = [];

  constructor(name, age) {
    console.log("Creating our student");
    super(name);
    this.age = age;
    this.occupation = "student";
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} year old`);
    console.log(`I'm a ${this.occupation}`);
  }
}

let chike = new Student("chike", 22);
chike.scores.push(95, 85, 76);
chike.greet();
console.log(chike.scores);
