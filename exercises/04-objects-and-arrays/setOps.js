const set = new Set([1, 2, 3, 4, 5]);

set.add("Chu"); // add a new element to the set
console.log(set);

console.log(set.has("Chu")); // check if our set contains an element called Chu

const Obj = {
  name: "Blessing",
  age: 21,
  location: "Buea",
};

set.add(Obj);
console.log(set.size);
