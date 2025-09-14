class Student {
  constructor(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
    this.isGraduated = false;
  }
  graduate() {
    this.isGraduated = true;
  }

  get personName() {
    return this.name;
  }

  set personName(newName) {
    this.name = newName;
  }
}

const chu = new Student("Chu A.", 22, 3.5); // create a new student object
chu.graduate();

console.log(chu.personName);

//update name
chu.personName = "Chu Malik";
console.log(chu.personName);
