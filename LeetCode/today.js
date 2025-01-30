// function x(){
//     for(let i = 0; i <= 5; i++){
//         (
//             function(i){
//                 setTimeout(function(){
//                     console.log(i);
//                 },1000)
//             })(i)
//     }
// }
// x();

// function x() {
//     for (var i = 0; i <= 5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, 1000);
//     }
// }
// x();


// function outerMost(){
//   function outer(name){
//     function inner(greet){
//         console.log(greet+ " " +name);
//     }
//      return inner;
//     }
//     return outer
// }

// let close = outerMost()
// close("harish")("Hi");


// function Counter(){
//     var count = 1;
//     this.increment = function(){
//         count++;
//         console.log(count)
//     }
//     this.decrement = function(){
//         count--;
//         console.log(count)
//     }
// }

// let close = new Counter();
// close.decrement();
// close.increment();


// var x = function(){                            // function expression is also known as function declaration
//     console.log("function Expression")
// }

// x()

// function a(){
//     console.log("function statement")  // function statement
// }

// a()

// difference between function expression and function statement

// Ans : - Hoisting is the only difference between them, function statement hoisted it's declaration along with body, so we can call this function
// before declaretion as well.

// but in case of expression function only declaration is hoisted so when we call this before decalaration it throw undefined



/////  First Class function ///

// first class function is a function which is assigned in a variable, passed as an argument into another function and returning function by another function


// setTimeout(function(){
//    console.log("time")
// },1000);

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// })


//Event Loop :- Continuously monitor Callback queue and call stack, it checks whether code is present in the call back queue or not, if the code is present there
// then event loop pick the code and check that there is no code executing in call stack. If there is no code is executing  then event loop push the code
// into call stack and repeat the same process untill the all lines of code executed.


// Higher Order Function  : - A function which takes another function as an argument and return a function known as Higher order function;

const radius = [5, 4, 6, 8];

const area = function (radius) {        // callback function
    return Math.PI * radius * radius;
}

const circumference = function (radius) {   // callback function
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {   // callback function
    return 2 * radius;
}

// const calculate = function(radius,logic){    // calculate is Higer Order  
//     let output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

//     Array.prototype.calculate = function(radius,logic){    // calculate is Higer Order  
//     let output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

//    radius.calculate(radius,area);
//    console.log(radius.calculate(radius,area))
// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));

// console.log(radius.map(area));

// Array.prototype.calculate = function(logic){    // calculate is Higer Order  
//     let output = [];
//     for(let i = 0; i < this.length; i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// console.log(radius.calculate(circumference));

// Array.prototype.calculate = function(radius,logic){
//     let output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(radius.calculate(radius,diameter))

// pure function :- A pure function is a function that, given the same input, will always return the same output and does not produce any observable side effects. 
// pure function is function that, give the same input, will always return the same output and does not give any oservable side effects.
// impure function :- is a function, gives the same input, will always return the deffernt output.

//pure function

// function sum(a,b){
//   return a + b;
// }

// console.log(sum(2,3));

// // Impure function
// let count = 0;
// function increment(){
//     return count++;
// }

// console.log(increment());// same input defferent output
// console.log(increment());

// Example of Higher Order function :- map, filter, reduce, forEach 

//map Key Point :-immutable - map can not change the original array it returns new array,
// Function Execution :- provided function is executed for arrays each elements.
// array length :- it creates array with the same length

// use of Map :- Transformation - we can transform arrays element
// Extraction :- from array object we can extract data
// chainig :- with other arrays method we can use the map to transform the complex data.

// const numbers = [1, 2, 3, 4, 5];

// pick the even and double it

// let newArray = numbers.filter(element=> element%2 === 0).map(element=>element*2);
// console.log(newArray);

// pick the even and sum of it
// let sum = numbers.filter(element=>element%2 === 0).reduce((acc,currval)=>{
//      return acc + currval;
// },0)
// console.log(sum);

// for in loop 

// const family = {
//     father: {
//         name: "John",
//         age: 45,
//         hobbies: ["Reading", "Cycling", "Gardening"]
//     },
//     mother: {
//         name: "Jane",
//         age: 43,
//         hobbies: ["Cooking", "Painting", "Yoga"]
//     },
//     child: {
//         name: "Jack",
//         age: 12,
//         hobbies: ["Soccer", "Video Games", "Reading"]
//     }
// };

// for(let member in family){
//     // console.log(`${member} `)
//     console.log(`Name : ${family[member].name}`)
//     console.log(`age : ${family[member].age}`)
//     console.log(`Hobbies : ${family[member].hobbies}`)
// }


// callBack and CallBack Hell

//CallBack Function : use for asyncronous operaion

// multiple nested call back function make the code defficult to read and maintaine

// function task1(callback) {
//     setTimeout(() => {
//         console.log('Task 1 completed');
//         callback();
//     }, 1000);
// }

// function task2(callback) {
//     setTimeout(() => {
//         console.log('Task 2 completed');
//         callback();
//     }, 1000);
// }

// function task3(callback) {
//     setTimeout(() => {
//         console.log('Task 3 completed');
//         callback();
//     }, 1000);
// }

// // Callback Hell Example
// task1(() => {
//     task2(() => {
//         task3(() => {
//             console.log('All tasks completed');
//         });
//     });
// });

// Callback hell : deeply nested callback function can make the code hard to read and maintaine.

// This issue can be mitigate using promise and async/await which help to flatten the code improve the readability of code

// function task1(callback){
//     setTimeout(()=>{
//         console.log('Task 1 completed');
//         callback();
//     },1000)
// }

// function task2(callBack){
//     setTimeout(()=>{
//        console.log('Task 2 completed');
//        callBack()
//     },1000)
// }

// function task3(callBack){
//     setTimeout(()=>{
//       console.log('task 3 completed');
//       callBack();
//     },1000);
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             console.log('All task Completed');
//         })
//     })
// })


// function task(sum){
//     console.log("100");
//     console.log(sum)
// }

// function sum(a,b){
//     return a + b ;
// }

// task(sum(4,8));



// function task1(callback){
//     setTimeout(()=>{
//         console.log('Task 1 completed');
//         callback();
//     },1000)
// }

// function task2(callBack){
//     setTimeout(()=>{
//        console.log('Task 2 completed');
//        callBack()
//     },1000)
// }

// function task3(callBack){
//     setTimeout(()=>{
//       console.log('task 3 completed');
//       callBack();
//     },1000);
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             console.log('All task Completed');
//         })
//     })
// })


// function task1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//            console.log("Task 1 Completed");
//            resolve();
//         });
//     })
// }

// function task2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Task 2 Completed");
//             resolve();
//         });
//     })
// }

// function task3(){
//     return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("Task 3 Completed");
//         resolve();
//     });
//     })
// }

// task1().then(
//    ()=>{task2()} 
// ).then(
//     ()=>{task3()}  
// ).then(()=>{console.log("task Completed")}).catch((error)=>{
//     console.log(error);
// })


// function task1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Task 1 completed');
//             resolve('Result from task 1');
//         }, 1000);
//     });
// }

// function task2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Task 2 completed');
//             resolve('Result from task 2');
//         }, 1000);
//     });
// }

// function task3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Task 3 completed');
//             resolve('Result from task 3');
//         }, 1000);
//     });
// }

// task1()
//     .then((result1) => task2(result1))
//     .then((result2) => task3(result2))
//     .then(() => {
//         console.log('All task completed');
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


// function simulateTask1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.5; // Randomly succeed or fail
//             if (success) {
//                 resolve('Task 1 completed successfully!');
//             } else {
//                 reject('Task 1 failed!');
//             }
//         }, 1000);
//     });
// }

// function simulateTask2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.7; // Randomly succeed or fail
//             if (success) {
//                 resolve('Task 2 completed successfully!');
//             } else {
//                 reject('Task 2 failed!');
//             }
//         }, 1000);
//     });
// }

// simulateTask1().then((Result)=>{
//     console.log(Result);
//     return simulateTask2();
// }).then((result1)=>{
//     console.log(result1);
// }).catch((error)=>{
//    console.error(error); 
// })

// function simulateTask1(callback){
//     setTimeout(() => {
//                     const success = Math.random() > 0.5; // Randomly succeed or fail
//                     if (success) {
//                         console.log('Task 1 completed successfully! ' + success);
//                         callback();
//                     } else {
//                         console.log('Task 1 failed! ' + success);
//                         callback();
//                     }
//                 }, 1000);

// }

// function simulateTask2(callback){
//     setTimeout(() => {
//         const success = Math.random() > 0.7; // Randomly succeed or fail
//                     if (success) {
//                         console.log('Task 2 completed successfully! ' + success);
//                         callback();
//                     } else {
//                         console.log('Task 2 failed! ' + success );
//                         callback();
//                     }
//     },1000)
// }

// function simulateTask3(callback){
//    setTimeout(()=>{
//     const success = Math.random() > 0.7; // Randomly succeed or fail
//     if (success) {
//         console.log('Task 3 completed successfully!' + success);
//         callback();
//     } else {
//         console.log('Task 3 failed! ' + success);
//         callback();
//     }
//    },1000)
// }

// simulateTask1(()=>{
//     simulateTask2(()=>{
//         simulateTask3(()=>{
//             console.log("all task comleted");
//         })
//     });
// })

// function simulateTask1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const success = Math.random() > 0.1;
//            if(success){
//             //  console.log("Task 1 Completed");
//              resolve("Task 1 Completed " + success );
//            }else{
//             //  console.log("Task 1 Failed");
//              reject("Task 1 Failed");
//            }
//         },1000);
//     })
// }

// function simulateTask2(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//           const success = Math.random() > 0.2;
//           if(success){
//             resolve("Task 2 Completed");
//           }else{
//             reject("Task 2 failed");
//           }
//        },1000);
//     })
// }

// function simulateTask3(){
//     return new Promise((resolve,reject)=>{
//         setImmediate(()=>{
//             const success = Math.random() > 0.3;
//             if(success){
//                resolve("Task 3 Completed");
//             }else{
//                reject("Task 3 Failed");
//             }
//         },1000);
//     })
// }

// simulateTask1().then((result)=>{
//     console.log(result);
//     return simulateTask2()
// }).then((result)=>{
//     console.log(result);
//     return simulateTask3()
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.error(error);
// })

// function simulateTask1(callback){
//     setTimeout(() => {
//                     const success = Math.random() > 0.5; // Randomly succeed or fail
//                     if (success) {
//                         console.log('Task 1 completed successfully! ' + success);
//                         callback();
//                     } else {
//                         console.log('Task 1 failed! ' + success);
//                         callback();
//                     }
//                 }, 1000);

// }

// function simulateTask2(callback){
//    setTimeout(()=>{
//        const success = Math.random() > 0.5;
//        if(success){
//           console.log('Task 2 Completed')
//           callback()
//        }else{
//           console.log('Task 2 failed')
//           callback()
//        }
//    })
// }


// simulateTask1(()=>{
//     simulateTask2(()=>{
//         console.log("All task completed");
//     })
// })


// const simulateTask1 = function() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.5; // Randomly succeed or fail
//             if (success) {
//                 console.log('Task 1 completed successfully! ' + success);
//                 resolve(); // Resolve the promise if successful
//             } else {
//                 console.log('Task 1 failed! ' + success);
//                 reject(new Error('Task 1 failed!')); // Reject the promise if failed
//             }
//         }, 1000);
//     });
// }



// const simulateTask2 = function() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.5; // Randomly succeed or fail
//             if (success) {
//                 console.log('Task 2 completed successfully! ' + success);
//                 resolve(); // Resolve the promise if successful
//             } else {
//                 console.log('Task 2 failed! ' + success);
//                 reject(new Error('Task 2 failed!')); // Reject the promise if failed
//             }
//         }, 1000);        
//     });
// }

// const simulateTask3 = function(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         const success = Math.random() > 0.5;
//         if(success){
//             console.log('Task 3 completed successfully ' + success);
//             resolve();
//         }else{
//             console.log('Task 3 failed');
//             reject(new Error('Task 3 failed'));
//         }
//       },1000)
//     })
// }


// const asyncFunction = async ()=>{
//     try{
//         await simulateTask1();
//         await simulateTask2();
//         await simulateTask3();
//     }catch(error){
//         console.log(error)
//     }
// }


// asyncFunction();


// const simulateTask1 = function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const success = Math.random() > 0.1;
//             if(success){
//                 resolve("task 1 Completed");
//             }else{
//                 reject("Task 1 rejected");
//             }
//         })
//     })
// }

// const simulateTask2 = function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const success = Math.random() > 0.1;
//             if(success){
//                 resolve("task 2 Completed");
//             }else{
//                 reject("Task 2 rejected");
//             }
//         })
//     })
// }

// const result = async()=>{

// }


// function palindrome(num){
//    let numArr = num.toString()
//    let numArray = num.toString().split('').reverse().join('');

//    console.log(numArray);
//    return numArray === numArr
// }
// palindrome(121)
// console.log(palindrome(121));

// function palindrome(num){
//     num = num.toString()
//     let numArr = num.toString().split('');
//     return numArr.every((element, index)=> element === numArr[numArr.length - 1 -index] )
// }

// console.log(palindrome(12121));

// function palindrome(num){
//     num = num.toString();
//     let numArray  =  num.split('');
//     return numArray.every((element,index)=>element === numArray[numArray.length - 1 - index])
// }

// console.log(palindrome(1221));



// recursion

// function palindrome(num){
//    let str = num.toString();
//    return isPalindrome(str, 0, str.length - 1);
// }

// function isPalindrome(str, start, end){
//    if(start >= end) return true;
//    if(str[start] !== str[end]) return false;
//    return isPalindrome(str, start + 1, end - 1)
// }

// console.log(palindrome(121))


//Factorial

// const Factorial = function(n){
//     let total = 1;
//    for(let i = n; i > 0 ; i--){
//       total = total * i;
//    }
//    return total;
// }

// console.log(Factorial(1));

// HCF and LCM

// const lowestCommonFactor = function(a,b){
//      let smaller = Math.min(a,b);
//      let hcf;
//      for(let i = 1; i <= smaller; i++){
//          if(a%i === 0 && b%i === 0){
//             hcf = i
//          }
//      }
//      return a*b/hcf;
// }

// console.log(lowestCommonFactor(12,80));


// const prime_Number = function(n){
//    for(let i = 2; i < n; i++){
//     let isprime = true;
//       for(let j = 2; j < i; j++){
//         if(i%j === 0){
//            isprime = false;
//         }
//       }
//     if(isprime){
//       console.log(i);
//       isprime = false;
//     }
//    }
// }

// prime_Number(50);


// recursion

// let n = 10;

// function printNumber(n){
//     if(n <= 0){
//         return 
//     }
//     console.log(n)
//     printNumber(n - 1);
// }

// printNumber(n);

// check palindrome through recursion



// function checkPalindrome(str){
//     if(str.length <= 1){
//      return true;
//     }
//     if(str[0] === str[str.length - 1]){
//        return checkPalindrome(str.slice(1,-1));
//     }
//     return false;
// }

// console.log(checkPalindrome("nitina"));


// sum all the digit 

// function sumOfDigit(n){
//     if(n <= 10){
//         return n;
//     }
//     let num = Math.floor(n / 10);
//     console.log(n % 10);
//     return n % 10 + sumOfDigit(num);
// }
// console.log(sumOfDigit(12345));

// let arr = [1,2,3,7,5]
// let n = 5
// let s = 12

// for(let i = 0; i < n; i++){
//     let total = 0;
//     for(let j = i; j < n; j++){
//         total = total + arr[j]
//       if(total === s){
//           console.log(i,j)
//       }
//     }
// }

// find missing element

// let arr = [1,2,3,5]
// let n = 5

// function findMissingNumber(){
//     for(let i = 0; i <= n; i++ ){
//         if(i + 1 !== arr[i]){
//             console.log(i + 1);
//             return
//         }
//     }
// }

// findMissingNumber()

// Kadane's theorem

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let max = arr[0];
// let maxend = arr[0];
// function kadanetheorem(){
//     for(let i = 0; i < arr.length; i++){
//         maxend = Math.max(arr[i], maxend + arr[i]);
//         max = Math.max(maxend,max);
//     }
//     console.log(max);
// }


// kadanetheorem();

// Array in Ascending order

// let arr = [0,2,1,2,0]

// function ascendingOrder(){
//     for(let i = 0 ; i < arr.length; i++ ){

//     }
// }

// Remove duplicate from array

// let arr = [4,7,5,1,2,6,5,8,4,5]
// arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr);
// function removeDuplicate(arr){
//     let count = 1;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === arr[i+1]){
//             count++;
//             // console.log(i)
//         }else{
//             count = 1;
//         }
//         if(count > 1){
//             console.log(`${arr[i]} is repeting ${count} time`)
//         }
//     }
// }

// removeDuplicate(arr);

// Input: n = 6;
// let arr = [16,17,4,3,5,2,7,5,7,2,9];

// function filterElement(arr){
//     let leader = [];
//     let n = arr.length;
//     let max = arr[arr.length - 1]
//     leader.push(max);
//     for(let i = n - 2; i >= 0; i--){
//        if(arr[i] >= max){
//           max = arr[i];
//           leader.push(max);
//        }
//     }
//     console.log(leader.reverse());
// }

// filterElement(arr);

// let arr = [10,12,-4,-3,50,4]
// let k = 4;
// function maxAverageValue(arr,k){
//     let maxAve = 0;
//     let n = arr.length;
//     let average = 0;
//     for(let i = 0; i <= n-k; i++){
//         let total = 0;
//         for(let j = i; j < k + i ; j++){
//             // console.log(j);
//             total = total + arr[j];
//             }
//             average = total/k;
//             if(maxAve < average){
//                 maxAve = average;
//             }
//         }
//     return maxAve
// }
// console.log(maxAverageValue(arr,k))


// let arr = [0,0,2,1,0,2,1];

// let h = arr.length;
// let m = 0;
// let l = 0; 

// while(l < h){
//     if(arr[l]===0){
//         a
//     }
// }


// let arr = [1,3,5,3,4];

// arr = arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr); 

// function checkduplicates(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == i + 1)
//             continue;
//         else{
//             let temp = arr[i];
//             let temp2 = arr[temp - 1];
//             arr[i] = temp2;
//             arr[temp - 1] = temp;
//             console.log(arr);
//         }
//     }

//     let ans;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != i + 1) {
//             ans = arr[i];
//         }
//     }

//     console.log("arr is", arr);
//     return ans;
// }

// console.log(checkduplicates([1, 2, 5, 3, 5]));





// function checkduplicate(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === i + 1){
//             continue;
//         }else{
//             let temp = arr[i];
//             let temp2 = arr[temp - 1];
//             arr[i] = temp2;
//             arr[temp - 1] = temp; 
//         }
//     }
// }

// let arr = [1,2,5,3,5];

// checkduplicate(arr);

let sentence = "watch thapa technical javascript tutorial"

// function longestString(sent){
//    let arr = sent.split(" ");
// //    console.log(arr);
//    let longest = ""
//    let longestword = arr.find((element)=>{
//       if(element.length > longest.length){
//           longest = element
//       }
//    })
//    console.log(longest);
// }
// longestString(sentence);

// function longest(sentence) {
//     if (sentence.trim().length === 0) {
//         return false;
//     }
//     word = sentence.split(" ");
//     console.log(word)
//     word = word.sort((a, b) =>  b.length - a.length)
//     return word[0];
// }

// console.log(longest(sentence))


// let clicks = [
//     {date : "2024-10-12T18:30:00.000+00:00", click : 21, order : 2},
//     {date : "2024-10-13T18:30:00.000+00:00", click : 25, order : 5},
//     {date : "2024-10-15T18:30:00.000+00:00", click : 29, order : 4},
//     {date : "2024-10-18T18:30:00.000+00:00", click : 27, order : 8},
//     {date : "2024-10-19T18:30:00.000+00:00", click : 18, order : 5},
// ]

// let impressions = [
//     {date : "2024-10-12T18:30:00.000+00:00", impression : 28},
//     {date : "2024-10-13T18:30:00.000+00:00", impression : 27},
//     {date : "2024-10-14T18:30:00.000+00:00", impression : 22},
//     {date : "2024-10-15T18:30:00.000+00:00", impression : 21},
//     {date : "2024-10-16T18:30:00.000+00:00", impression : 25}
// ]

// let result = [
//     {date : "2024-10-12T18:30:00.000+00:00", click : 21, impression : 28, order : 2},
//     {date : "2024-10-13T18:30:00.000+00:00", click : 25,impression : 27, order : 5},
//     {date : "2024-10-14T18:30:00.000+00:00", click : 0,impression : 22, order : 0},
// ]

// let clicksMap = new Map(clicks.map(element=>[element.date,element.click]));
// let impressionsMap = new Map(impressions.map(element=>[element.date,element.impression]))

// let allDates = new Set([...clicksMap.keys(), ...impressionsMap.keys()]);

// let results = [...allDates].sort().map(date => ({
//     date,
//     click: clicksMap.get(date) || 0,
//     impression: impressionsMap.get(date) || 0
// }));
// console.log(results);




// let clicksMap = new Map(clicks.map(element=>[element.date,element.count]));
// let impressionsMap = new Map(campaignImpressionData[0].matchedImpressions.map(element=>[element.date,element.count]))
// let revenueMap = new Map(revenuegeGenerationFromCampaign.map(element=>[element.date,element.totalOrders]))

// let allDates = new Set([...clicksMap.keys(), ...impressionsMap.keys(), ...revenueMap.keys()]);

// let results = [...allDates].sort().map(date => ({
//  date,
//  click: clicksMap.get(date) || 0,
//  impression: impressionsMap.get(date) || 0,
//  order : revenueMap.get(date) || 0,
// }));

// console.log(results);


// function Person(name,age){
//    this.name  = name;
//    this.age = age
// }

// Person.prototype.greet = function(){
//     console.log("hello my Name is "+this.name)
// }
// Person.prototype.designation = "Software Engineer"

// function Student (name,age,grade){
//     Person.call(this,name,age);
//     this.grade = grade;
// }

// Student.prototype = Object.create(Person.prototype);

// Student.prototype = Object.create(Person.prototype);

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.constructor = Student;

// const student = new Student("harish",25,"A");
// student.name
// console.log(student.name);

// student.greet()

// const person = new Person("Harish",25);

// console.log(person.designation)
// person.greet();


// function Person(name,age,mobile){
//     this.name = name;
//     this.age = age;
//     this.mobile = mobile;
// }

// Person.prototype.greet = function(){
//     console.log("hi " + this.name );
// }


// const person = new Person("harish",25,"9518545028");

// person.greet()

// function Student(name,age,mobile,branch){
//     Person.call(this,name,age,mobile);
//     this.branch = branch;
// }

// Student.prototype = Object.create(Person.prototype);

// const student = new Student("Harish",25,"9518545028","ME");

// Student.prototype.constructor = Student;  

// student.greet();

// console.log(student.mobile)


// const student = {
//     name : "Harish",
//     age : 25,
//     greet : function(){
//         console.log("My Name Is " + this.name)
//     }
// }

// const branch = {
//     designation :  "Mechanical Engineer",

// }

// branch.__proto__ = student;

// console.log(branch.name)

// branch.greet();
// __proto__ is a property of Javascript Object or each javascript Object has __proto__ property use to make prototype chani which
// point .prototype
// __proto__ is used to make prototype chain and point the prototype

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.sayHello = ()=>{
//         console.log("Hi My Name Is " + this.name)  // in Both case "this" keyword refers to constructor function instance
//     };
//     this.greet = function(){
//         console.log("Greeting From "+this.name);
//     }

// }

// const person = new Person("harish",25);

// person.sayHello();
// person.greet();

// var name = "Kumar"
// const person = {
//     name : "harish",
//     greet : ()=>{
//         console.log("Greet From " + this.name)  // In regular function "this" refers to object itself
//     }
// }

// console.log(person.name);
// person.greet();

var name = "Kumar";  // Using `var` makes it a property of the global `this` object

const person = {
    name: "harish",
    greet: () => {
        console.log("Greet From " + this.name);  // `this.name` now refers to the global `name`
    }
};

console.log(person.name); // Outputs: harish
person.greet(); 