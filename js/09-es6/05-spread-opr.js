// Array

let one = [1, 2, 3];
let two = [5, 6, 7];

let old_three = one.concat(two);
console.log(old_three);

let three = [...one, 4, ...two, 8];
console.log(three);
console.log(three.length);

three.forEach((item) => console.log(item));

// Objects

let akilan = { name: "Akilan", age: 34 };
let work = { role: "Technology Lead", location: "Bangalore" };

let details = { ...akilan, ...work, skill: "DevOps" };
//If the same key names will not work

console.log(details);
