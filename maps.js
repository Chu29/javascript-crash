const map1 = new Map();

console.log(map1);

map1.set("a", 1);

//returns elements of the map
console.log(map1);

//returns the size of the map
console.log(map1.size);

// inserts a key=>item pair into the map
map1.set("info", { name: "David Lee", age: 25 });

//get to fetch an item using it's key
// console.log("info: ", map1.get("info"));
console.log(map1);

console.log(map1.get("info"));

// checks if there's a key named 'item' in the map
console.log(map1.has("info"));

// loop through the map
for (const [key, value] of map1) {
  console.log(key, value);
}

// using forEach to loop
map1.forEach((value, key) => {
  console.log(key, value);
});

// get all the keys of the map
console.log("keys ", map1.keys());

// get all the values of the map
console.log("values ", map1.values());

// get all entries of the map
console.log("entries ", map1.entries());

// clear() to remove all items of a map
map1.clear();
console.log(map1, map1.size);

let weakMap = new WeakMap();

weakMap.set({ name: "Chu" });

let obj = { name: "David" };

weakMap.set(obj, { age: 20, courses: ["maths", "science"] });
console.log(weakMap.get(obj));
