const courses = {
  CIP: 7000,
  DSA: 2500,
  Data_Science: 4500,
  Web_Dev: 8900,
};
const university = {
  heritage: "BiyemAssi",
  citec: "Mvogt",
  kelden: "Nsimeyong",
  yibs: "Simbock",
};

const mergeObj = { ...courses, ...university };

console.log(mergeObj);
