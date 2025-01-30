// let num = 12345
// let num1 = String(num);

// console.log(typeof num1);

// let arr = from(String(num), Number);
// let str = num.toString();

// let str1 = str.split('');
// // console.log(str1)

// let sum = str1.reduce((acc, currVal) => {
//     acc = acc + Number(currVal)
//     return acc
// }, 0)

// console.log(sum);

// let num1 = String(num);

// let num1 = num.toString();

// console.log(num1);



let str = "12346"

let total = str.split('').reduce((acc,currVal)=>{
      return acc + Number(currVal)
},0)

console.log(total);
