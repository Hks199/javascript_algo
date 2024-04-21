
let fruits = ["mango", "Banana", "Apple", "Orange", "grapes", "mango"];

let set = new Set(fruits);

set.add("mango");

console.log(set.has("mango"));

console.log(set.delete("grapes"));
