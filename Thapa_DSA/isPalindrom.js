
let sent = " I am Harish kumar sahu"



let str = sent.toLowerCase().replace(/\W/g, "");

console.log(str.split('').reverse().join(""));
//**************************************************************** every */

let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [1, 2, 3, 4, 5, 6]

let result = arr1.every((val, index) => val === arr2[index])
console.log(result);