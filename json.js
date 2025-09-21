import jsonData from "./json.json" with { type: "json" };
const data =
  '{"name":"John Doe","age":30,"isStudent":0, "courses":["Math", "Science", "History"], "address":{"street":"123 Main St","city":"Anytown", "zip":"12345"}}';

const data1 = `{"name":"John Doe","age":30,"isStudent":0, "courses":["Math", "Science", "History"], "address":{"street":"123 Main St","city":"Anytown", "zip":"12345"}`;

console.log(data);

let student = JSON.parse(data);
console.log(student, typeof student);

const jsonObj = JSON.stringify(student);
console.log(jsonObj, typeof jsonObj);

console.log(jsonData);

