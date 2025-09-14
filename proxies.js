const student = {
  name: "Chu A",
  age: 22,
  gpa: 3.5,
  isGraduated: false,
  graduate: function () {
    this.isGraduated = true;
  },
};

const handler = {
  get: function (target, prop) {
    console.log(`Accessing property '${prop}'`);
    return target[prop] ? target[prop] : "property does not exist";
  },
  set: function (target, prop, value) {
    console.log(`Setting property '${prop}' to '${value}'`);
    if (target[prop]) target[prop] = value;
    return true;
  },
};

let proxyStudent = new Proxy(student, handler);
console.log(proxyStudent.name);
console.log(proxyStudent.age);
console.log(proxyStudent.class);

proxyStudent.age = 39;
console.log(proxyStudent.age);
proxyStudent.class = "none";
console.log(proxyStudent.class);

export { proxyStudent as student };
