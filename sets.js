const set1 = new Set([1, "hello", { count: true }, true, 1]);

console.log(set1);

// accessing values of sets
console.log(set1.values());

//add values to a set
set1.add(10);
set1.add(1);
console.log(set1);

//delete item from the set
set1.delete(10);
console.log("Deleted 10: ", set1);

// check if a value is an element of the set
console.log("\nCheck if 1 is present in set =>", set1.has(1));

//iterate over the set using forof loop
for (const element of set1) {
  console.log(element);
}

// clear the set
set1.clear();
console.log("\n", set1);

let weakSet = new WeakSet();

let obj1 = { name: "Chu", age: 20 };

weakSet.add(obj1);

console.log(weakSet);
