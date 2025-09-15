const studentObj = {
  name: "Chu",
  age: 22,
  profession: "Hardware Engineer",
};

console.log(studentObj);

// check is key exist in studentObj
console.log("class" in studentObj);
studentObj.hasOwnProperty("profession");
