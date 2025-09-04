'use strict'

// let mixed = [1, 'two', 3, 'four', 5]

// for (let index = 0; index < mixed.length; index++) {
//   const element = mixed[index];
//   console.log(element);
// }

// for(let index = mixed.length - 1; index >=0; index--){
//   console.log(mixed[index]);
// }

let students = [
  ['emmanuel', 30, 'PWD', 'NW'],
  ['leslie', 20, 'CHELSEA FC', 'NW'],
  ['vanessa', 24, 'MAN-U', 'LND'],
  ['nyap', 21, 'SPURS', 'LND'],
  ['Leila', 20, 'WARRI', 'NIGER'],
  ['arnold', 24, 'LIVERPOOL', 'SW']
]

// print out the students
// for(let i = 0; i < students.length; i++){

//   if(i >= 2) break;
//   let student = students[i];
//   console.log(student);

//   for(let j = 0; j < student.length; j++){
//     console.log(student[j]);
//   }
// }

for (const student of students) {
  console.log(student);
  for (const detail of student) {
    console.log(detail);
  }
}