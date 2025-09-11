const student = {
  name: "John Doe",
  get getName() {
    return this.name;
  },
  /**
   * @param {string} newName
   */
  set setName(newName) {
    this.name = newName;
  },
  age: 20,
  isEnrolled: true,
  courses: ["Maths", "Science", "History"],
  greet: () => {
    console.log("Hello, " + this.name);
  },
};

console.log(student.getName);

student.setName = "Malik Chu";
console.log(student);
