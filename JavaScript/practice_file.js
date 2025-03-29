
// let promise = new Promise(function (resolve, reject) {
//     let n = 10;
//     let m = 10;
//     if (n === m) {
//         resolve("Promise resolved");
//     } else {
//         reject("Promise rejected");
//     }
// })

const e = require("express");
const { Result } = require("postcss");

// promise
//     .then(function (successMessage) {
//         console.log(successMessage);
//     })
//     .catch(function (errorMessage) {
//         //error handler function is invoked 
//         console.log(errorMessage);
//     }); 

// const Data = async () => {
//     let data = "hello world";
//     return data;
// }

// Data().then(data => {
//     console.log(data);
// });

// navigator.geolocation.getCurrentPosition(
//     (position) => {
//       const { latitude, longitude } = position.coords;
//       console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//     },
//     (error) => {
//       console.error(`Error: ${error.message}`);
//     }
//   );


// const obj = {
//     "key" : "value"
// }

// console.log(obj.__proto__);

// Object.prototype.sayHello = function(){
//     console.log("Hello Dear " + obj.key)
// }

// obj.sayHello();
// const Animal = {
//   eat : true
// }

// const Dog = {
//   bark : true
// }

// //Dog.__proto__ = Animal;  //Animal is a prototype of Dog

// // console.log(Dog.eat);

// Object.prototype.canSee = function(){
//    console.log("hey " + Animal.eat + Dog.bark )
// }

// Animal.canSee();
// Dog.canSee();


// const Animal = {
//   eat : true
// }

// const mammal = {
//   hasFur : true
// }

// const Dog = {
//   bark : true
// }

// mammal.__proto__ = Animal;
// Dog.__proto__ = mammal;

// console.log(Dog.eat);
// console.log(Dog.hasFur)
// console.log(Dog.hasFur)


// const Animal = {
//   Eat:true
// }

// const Dog = {
//   bark : true
// }

// Dog.__proto__ = Animal;
// Animal.__proto__ = Dog;

// // console.log(Dog.Eat);
// console.log(Animal.bark);

// const Animal = {
//   eat : true
// }

// const Dog = Object.create(Animal);

// Animal.sleep = function(){
//   console.log("sleep......");
// }

// Dog.sleep();

// console.log(Animal.isPrototypeOf(Dog));

// const Animal = {
//   eat : true
// }

// const Dog = Object.create(Animal); // creating new object where Animal is Also Prototype of Dog

// console.log(Animal.isPrototypeOf(Dog));

// const connection = {"key" : 10}

// connection["key"] = 20;

// console.log(connection["key"])


//Abstruction : This is the Consept of Abstruction here hiding the implementation details and only showing the necessary details

// class Shape{
//    constructor(){
//      if(new.target === Shape){
//          throw new Error("Can not Instantiate abstract class Shape");
//      }
//    }
//    Area(){
//      throw new Error("Area() Method Should be Implement");
//    }
// }

// class Circle extends Shape {
//   constructor(radius){
//       super();// call the constructor of the parent class setsup the inheritence
//       this.radius = radius;
//   }
//   Area(){
//     return (Math.PI * this.radius ** 2).toFixed(2);
//   }
// }

// const circle = new Circle(25);
// console.log(circle.Area());

// let number = [4,8,7,9,5,2,1,6];
// let sum = 0;
// number.forEach((e)=>{
//      sum = sum + e;
//      console.log(sum);
// })
// console.log(sum);


// let newArray = number.map((e)=>{
//     e * 2
// })

// console.log(newArray);

// const numbers = [1, 2, 3, 4];
// const doubled = number.map((num) => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8]
// console.log(number); 

// const number = [5,4,8,9,2,4,5,8];

// const newArray = number.map((num)=> num * 2)
// console.log(newArray);

// const num = number.find((e)=>e<=2);  // return only one and very first element which obey the applied condition 

// console.log(num);

// let result = number.filter((num)=>(num%2 === 0)).reduce((accumulator, currentvalue)=>(accumulator + currentvalue),0);
// console.log(result);

// const products = [
//   { name: "Apple", category: "Fruit", price: 1.5 },
//   { name: "Carrot", category: "Vegetable", price: 0.5 },
//   { name: "Banana", category: "Fruit", price: 1.2 },
//   { name: "Broccoli", category: "Vegetable", price: 1.3 },
//   { name: "Chicken", category: "Meat", price: 5.0 },
//   { name: "Beef", category: "Meat", price: 7.0 }
// ];

// const list = products.reduce((accumulator,product)=>(
      
// ),{})

// let accumulator = {};

// for(let i=0; i<products.length; i++){
//    if(!accumulator[products[i].category]){
//       accumulator[products[i].category] = [];
//    }
//    accumulator[products[i].category].push(products[i]);
// }
// console.log(accumulator);

// let list = products.reduce((accumulator,product)=>{
//      if(!accumulator[product.category]){
//         accumulator[product.category] = 0;
//      }
//      accumulator[product.category] += product.price;
//      return accumulator
// },{});

// console.log(list);

// let list = products.reduce((accumulator,product)=>{
//      if(!accumulator[product.category]){
//        accumulator[product.category] = product
//      }
//      if(product.price > accumulator[product.category].price){
//       accumulator[product.category] = (product);
//      }
//      return accumulator;
// },{});
// console.log(list);


// const filterArray = products.filter((product)=>(
//    product.price > 1.5
// ))
// console.log(filterArray);

// "use strict";

// console.log(this)

// function showThis(){
//   console.log(this)
// }
// showThis();

// let name = "alice"
// const obj = {
//   // name: "Alice",
//   // greet() {
//     arrow : () => {
//       console.log(`Hello, my name is ${name}`)
//     }
//     // console.log(arrow());
//   // }
// };

// obj.arrow();

// use arrow function inside an object make one regular function and inside that regular function we can write arrow function
//  we can use arrow function as a call back fuction


// const obj = {
//   name : "Alice",
//   greet(){
//     setTimeout(()=>{
//       console.log(`my name ${this.name}`);
//     },1000)
//   }
// }
// obj.greet();

// greet("John");
// function greet(name) {
//   console.log(name); // Output: John
// }

// let name = "Harish"
// function isgreet(){
//   // const greet = ()=>{
//      console.log(this.name)
//   // }
//   // return greet()
// }

// isgreet()

// function sayWelcome(callback){
//   console.log("sayHello");
//   callback("SayWelcome");
// }

// sayWelcome((message)=>{
//    console.log(message);
// })


// function factorial(num){
//   if(num === 1){
//     return 1;
//   }
//     return num * factorial(num - 1);
// }

// console.log(factorial(5));

// function factorial(num){
//     if(num === 1){
//       console.log(num);
//       return 1;
//     }
//     console.log(num);
//     return num * factorial(num - 1);
// }

// factorial(5);

// let array = [2,4,8,7,6,1]
// let position = 3;
// function removeElement(){
//    for(let i=position; i < array.length; i++){
//        array[i] = array[i + 1];
//    }
//    array.length = array.length - 1;
//    console.log(array);
// }
// removeElement()

// array.pop()
// console.log(array);

// let find = 8;

// for(let i = 0; i < array.length; i++){
//   if(array[i] === find){
//     console.log("positon :" + i + " Item" + array[i]);
//   }
// }

// By the time setTimeOut callbacks execute, loops has finished its execution
// var keyword creates a single shared variable i across all iteration 

// function loopExample(){
//   for(var i = 0; i <= 3; i++){
//     setTimeout(function () {
//       console.log(i); // Output: 4, 4, 4
//     }, 1000)
//   }
// }
// loopExample();


// using let we can fix the issue because it is blocked scope, for each iteration it makes new closure 

// function outerfunction(){
//     let a = 5; //} lexical scope
//     return function innerFunction(){ // innerfunction accessing or keep remember the variable from its outer scope or parent scope even after the outerfunction finished its execution;
//                                      // that remembered scope is known as lexical environment  
//         a += 1;
//         console.log(a);
//     }
// }

// let newfunction = outerfunction();
// newfunction();

// Example of asynchronous function

// console.log("start");

// setTimeout(()=>{
//   console.log("setTimeOut");
// },1000);

// console.log("end")
// "use strict"

// function myfunc(){
//     console.log(this);  //Inside the function, in strict mode this is undefined
// }

// myfunc();


// const obj = {
//     name : "Harish",
//     greet : function(){
//         console.log(this.name) // this refers to the object only
//     }
// }
// obj.greet();

// const obj = {
//     name : "Harish",
//     greet : ()=>{
//         console.log(this.name);  // dont have there own this
//     }
// }

// obj.greet();

// const obj = {
//     name : "harish",
//     greet : function(){
//     greetFunc = ()=>{
//           console.log(this.name);  // if we have arrow function inside function declaration then this refers to the object
//        }
//     greetFunc()   
//     }
// }

// obj.greet()

// const obj = {
//     name : "Harish",
//     greet : function(){
//         setTimeout(function(){
//             console.log(this.name)
//         })
//     }
// }

// obj.greet();

// const obj = {
//     name : "Harish",
//     greet(){
//         setTimeout(function(){
//             console.log(this.name); //this refers to the global object only
//         })
//     }
// }

// obj.greet()

// const obj = {
//     name : "Harish",
//     greet(){
//         console.log(this.name);
//     }
// }
// setTimeout(obj.greet,1000)
// obj.greet()

// const mypromise = new Promise((resolve,reject)=>{
//      let success = true;
//      if(success){
//         resolve("promise has resolved");
//      }else{
//         reject("Promise has Rejected");
//      }
// })

// mypromise.then((result)=>{
//    console.log("fullfilled:", result)
// })
// .catch((error)=>{
//    console.log("Rejected:",error)
// })
// .finally(()=>{
//    console.log("Promise Settled.")
// })


// const mypromise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("Promise Resolved");
//     }else{
//         reject("Promise Rejected");
//     }
// })

// mypromise.then((Result)=>{
//     console.log("resolved:",Result);
// })
// .catch((error)=>{
//    console.log("Rejected ",error)
// })

// const mypromise = new Promise((resolve,reject)=>{
//     let isSuccess = true;
//     if(isSuccess){
//         resolve("Promise has resolved");
//     }else{
//         reject("Promise has rejected")
//     }
// })

// mypromise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise has been settled");
// })

// avoid callback  hell
// used for asynchronous operation
// esier to read as compare to call back function
// provide catch block for error handling


// const batchID = `BATCH${new Date().getFullYear()}${logData.batchID.toString().padStart(6, '0')}`;
// Result: BATCH2025000001

// const today = new Date();
// const day = today.getDate().toString().padStart(2, '0'); // Two-digit day
// const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Get numeric month (1 for Jan, 2 for Feb, etc.)
// const year = today.getFullYear().toString(); // Last two digits of the year
// const hours = today.getHours().toString().padStart(2, '0');
// const minutes = today.getMinutes().toString().padStart(2, '0');
// const seconds = today.getSeconds().toString().padStart(2, '0');

// console.log(`BATCH${year}${month}${day}${hours}${minutes}${seconds}`)

// const purchased_price = 1500; // Example value
// let purchased_weight ;  // Example value

// const price_per_gram = (purchased_price / purchased_weight).toFixed(2); // Limit to 2 decimal places
// console.log(`Price per gram: ${price_per_gram}`);


// const data = [
//     { share: "Reliance", lot: 500, price: 310 },
//     { share: "Reliance", lot: 1000, price: 300 }
//   ];

//   let sellinglot = 1200
//   for(let i = 0; i < data.length && sellinglot > 0; i++){
//       if(data[i].lot <= sellinglot){
//           sellinglot = sellinglot - data[i].lot
//           data[i].lot = 0;
//       }else{
//         console.log("hi")
//          data[i].lot = data[i].lot - sellinglot;
//          sellinglot = 0;
//       }
//   }
//   let remainiglot = data.filter((element)=>{
//       return element.lot > 0
//   })

//   console.log(remainiglot);

// setInterval(()=>{
//   console.log("hi")
// },1000)


// let sent = "Hello hi harish";

// let isokay = sent.toLowerCase().startsWith("hello");

// console.log(isokay);

// let str = "harish kumar sahu ji Nagpur wale"
// let count = 20;
// function trunckate(str, count) {
//     if (str.length > count) {
//         return str.slice(str, count).concat("...");
//     }
// }

// console.log(trunckate(str, count))

// const reverseString = async(str)=>{
//    return str.split('').reverse().join('');
// }

// const string = reverseString("mynameisharish");

// console.log(string);

// let num = [1,2,3,4,5,6]
// console.log(num.reverse().join(''))

// const sum = num.reduce((sum,num)=>{
//      return sum + num
// },0)

// const sum = num.reduce((sum,num)=>sum + num, 0)

// const sum = num.reduce((sum,num)=>{
//     return sum = sum + num;
// },0);

// console.log(sum);

// let filterElement = num.find((element)=>element%2==0);
// console.log(filterElement);

// const letter = "harishkumarsahu"

// const letterFrequency = letter.split('').reduce((acc,char)=>{
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
// },{});
// console.log(letterFrequency);

// let str1 = "listen";
// let str2 = "silent";

// const isAnagram = (str1,str2)=>{
//   return  str1.split('').sort().join('') == str2.split('').sort().join('');
// }

// console.log(isAnagram(str1,str2));

// let num = [1,2,3,4,5,6];


// console.log(Math.max(...num));
// console.log(Math.min(...num));

// let num1 = [1,2,3,5,6];
// let num2 = [4,5,6,7,8,9];

// let uniqNumber = new Set([...num1, ...num2]);
// let unique = [...uniqNumber].sort();

// console.log(unique);

// const checkDuplicate = (arr)=>{
//    return new Set(arr).size == arr.length;
// }

// console.log(checkDuplicate);

// let num1 = [1,2,3,4];
// let num2 = [4,5,6,7,8,9];

// let set = new Set(num1);

// let transit = num2.filter((elm)=>set.has(elm))

// console.log(transit);


// const arr = [1, [2, 3], [4, [5, 6]]];

// let flattenArray = function(arr){
//   return arr.reduce((acc,val)=>acc.concat(Array.isArray(val)?flattenArray(val):val),[]);
// }
// console.log(flattenArray(arr));

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8,9]

// let arr3 = [].concat(10,15,arr2,arr1);
// console.log(arr3);

// let str1 = "hello";
// let str2 = "world";
// let str3 = str1.concat(" ",str2);
// console.log(str3);

// const nestedArray = [1, [2, 3, [4, 5, [6, 2, [7, 8, 1]]]], [9, 10, [10, 11]]];

// let flattenArrayKeepuniqueElement = (arr,acc = new Set())=>{
//     arr.forEach((val)=>{
//         if(Array.isArray(val)){
//           flattenArrayKeepuniqueElement(val,acc)
//         }else{
//           acc.add(val);
//         }
//     })
//     return acc;
// }

// console.log(flattenArrayKeepuniqueElement(nestedArray));

// let flattenArrayKeepuniqueElement = (arr)=>{
//      return [...new Set(
//         arr.reduce((acc,val)=>acc.concat(Array.isArray(val)?flattenArrayKeepuniqueElement(val):val),[])
//      )]
// }
// console.log(flattenArrayKeepuniqueElement(nestedArray));
// // flattenArrayKeepuniqueElement(nestedArray);

const orders = [
    {
        orderId: 1,
        items: [
            { product: "Laptop", price: 1000, quantity: 2 },
            { product: "Mouse", price: 50, quantity: 3 },
        ]
    },
    {
        orderId: 2,
        items: [
            { product: "Laptop", price: 1000, quantity: 1 },
            { product: "Keyboard", price: 80, quantity: 5 },
        ]
    },
    {
        orderId: 3,
        items: [
            { product: "Mouse", price: 50, quantity: 2 },
            { product: "Keyboard", price: 80, quantity: 1 },
        ]
    }
];

// const allItems = orders.flatMap(order => order.items);
// let newArray = [];
// const allItems = orders.map(order=>{
//     return order.items;
// })

// allItems.forEach((Element)=>newArray.push(...Element));

// console.log(newArray);

// orders.map((order)=>order.items).forEach((ele)=>newArray.push(...ele));
// console.log(newArray);
// let arrobject = [];

// const allItems = orders.flatMap(order => order.items);

// Step 2: Aggregate revenue and quantity per product

// let productObject = allItems.reduce((acc,items)=>{
//       if(!acc[items.product]){
//          acc[items.product] = {revenue : 0, qty : 0}
//         }
//            acc[items.product].revenue += items.price*items.quantity; 
//            acc[items.product].qty += items.quantity
//         return acc;
// },{})

// console.log(productObject);

// const users = [
//     { id: 1, name: "Alice", age: 25, city: "London" },
//     { id: 2, name: "Bob", age: 30, city: "New York" },
//     { id: 4, name: "Charlie", age: 35, city: "London" },
//     { id: 3, name: "David", age: 40, city: "Paris" },
//     { id: 6, name: "David", age: 40, city: "Paris" },
//     { id: 7, name: "David", age: 40, city: "Paris" }
// ];

// users.sort((a,b)=>a.id - b.id);

// let count = 1;
// for(let ele of users){
//     if(ele.id != count){
//        console.log("missing Number : " + count)
//        break;
//     }
//     count++;
// }

// let data = users.find((ele)=>ele.age < 30);
// console.log(data);

// const employees = [
//     { id: 1, name: "Alice", department: "Engineering", salary: 70000, experience: 5, skills: ["JavaScript", "React"] },
//     { id: 2, name: "Bob", department: "HR", salary: 50000, experience: 7, skills: ["Communication", "Recruitment"] },
//     { id: 3, name: "Charlie", department: "Engineering", salary: 90000, experience: 10, skills: ["Node.js", "AWS"] },
//     { id: 4, name: "David", department: "Marketing", salary: 55000, experience: 4, skills: ["SEO", "Content Writing"] },
//     { id: 5, name: "Eve", department: "HR", salary: 60000, experience: 9, skills: ["Payroll", "Management"] },
//     { id: 6, name: "Frank", department: "Engineering", salary: 80000, experience: 8, skills: ["Python", "Django"] }
// ];

// Find the average salary per department.
 

    // 1️⃣ Find the average salary per department
// let avgSalary = employees.reduce((acc,element)=>{
//     acc[element.department] = acc[element.department] || {totalSalary : 0, count : 0};
//     acc[element.department].totalSalary += element.salary;
//     acc[element.department].count++;
//     return acc;
// },{})

// Object.keys(avgSalary).forEach((department)=>{
//     avgSalary[department] = avgSalary[department].totalSalary / avgSalary[department].count;
// })

// console.log(avgSalary)

// 2️⃣ Find employees with the highest experience

// let obj = {};
// let max = 0;
// for(let i = 0; i < employees.length; i++){
//     if(max < employees[i].experience){
//         max = employees[i].experience;
//         obj = employees[i]
//     }
// }
// console.log(obj);

// let maxExperience = Math.max(...employees.map((element)=>element.experience))
// console.log(maxExperience);
// let maxExpEmp = employees.find((emp)=>emp.experience == maxExperience);
// console.log(maxExpEmp);

// 3️⃣ List all unique skills available in the company


// let uniqueSkill = [...new Set(employees.flatMap((skill)=>skill.skills))];
// console.log(uniqueSkill)

// function uniqueSkills(employees){
//     let skillsArray = employees.reduce((acc,empl)=>{
//           if(Array.isArray(empl.skills)){
//             uniqueSkills(empl.skills);
//           }else{
//             acc.push(empl)
//           }
//           return acc;
//     },[])
//     console.log(skillsArray);
// }

// uniqueSkills(employees)

// find Duplicate

// let num = [1,2,3,4,5,6,5,6]
// let  uniq = new Set();
// let duplicate = new Set();

// num.forEach((ele)=>{
//     if(!uniq.has(ele)){
//        uniq.add(ele);
//     }else{
//        duplicate.add(ele);
//     }
// })

// console.log([...uniq]);
// console.log([...duplicate]);

//Reverse string

// let str1 = "HarishSahu"

// let reverseStr = str1.split('').reverse().join('');
// console.log(reverseStr);

// count character frequency;

// let countChar = str1.toLowerCase().split('').reduce((acc,char)=>{
//         acc[char] = (acc[char] || 0 ) + 1;
//         return acc;
// },{})

// console.log(countChar);

// let str1 = "listen";
// let str2 = "silent";

// let checkAnagram = (str1,str2)=>{
//   return (str1.split('').sort().join('') === str2.split('').sort().join(''));
// }
// console.log(checkAnagram(str1,str2));

// check Inersection

// function checkIntersection(num1,num2){
//     let set = new Set(num1);
//     let intersection = num2.filter((ele)=>set.has(ele));
//     return intersection;
// }
// console.log(checkIntersection([1,2,3,4],[4,5,6,7]));

// let flattenArray = (arr)=>{
//   return arr.reduce((acc,val)=>(acc.concat(Array.isArray(val)?flattenArray(val):val)),[])
    //  return arr.flatMap((val)=>val);
// }

// function flattenArray(arr){
//     return arr.reduce((acc,val)=>(acc.concat(Array.isArray(val)?flattenArray(val):val)),[])
// }

// console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));

// let arr = [1,2,4,5,7,8]

// let arr2 = arr.concat(4,5,[4,8,5])
// console.log(arr2);

const employees = [
    { id: 1, name: "Alice", department: "Engineering", salary: 70000, experience: 5, skills: ["JavaScript", "React"] },
    { id: 2, name: "Bob", department: "HR", salary: 50000, experience: 7, skills: ["Communication", "Recruitment"] },
    { id: 3, name: "Charlie", department: "Engineering", salary: 90000, experience: 10, skills: ["Node.js", "AWS"] },
    { id: 4, name: "David", department: "Marketing", salary: 55000, experience: 4, skills: ["SEO", "Content Writing"] },
    { id: 5, name: "Eve", department: "HR", salary: 60000, experience: 9, skills: ["Payroll", "Management"] },
    { id: 6, name: "Frank", department: "Engineering", salary: 80000, experience: 8, skills: ["Python", "Django"] }
];

// Find employees with the highest experience

//    highestExperienceEmpl = employees.find((empl)=>empl.experience = Math.max(...employees.map(empl=>empl.experience)))
   console.log(employees.find((empl)=>empl.experience = Math.max(...employees.map(empl=>empl.experience))));

  // 5️⃣ Get the total salary expense for each department

//   let getTotalSalaryOfEachDepartment = employees.reduce((acc,empl)=>{
//        acc[empl.department]  = (acc[empl.department] || 0) + empl.salary;
//        return acc;
//   },{})

//   console.log(getTotalSalaryOfEachDepartment);

// 1️⃣ Find the average salary per department

// let avgSalary = employees.reduce((acc,empl)=>{
//     if(!acc[empl.department]){
//         acc[empl.department] = {salary : 0, count : 0};
//     }
//     acc[empl.department].salary += empl.salary;
//     acc[empl.department].count += 1; 
//     return acc;
// },{})

// Object.keys(avgSalary).forEach((val)=>{
//     avgSalary[val] = avgSalary[val].salary/avgSalary[val].count;
// })

// console.log(avgSalary);










// let arr = []
// // let skillslist = employees.map((empl)=>empl.skills).flatMap((val)=>val);
// let skillsArray = employees.map((val)=>val.skills);
// let newSkillArray = arr.concat(...skillsArray);


// console.log(newSkillArray);


// const deepflattenarray = (arr)=>{
//    let flatenArray = arr.reduce((acc,val)=>(acc.concat(Array.isArray(val)?deepflattenarray(val):val)),[]);
//    return [...new Set(flatenArray)];
// }

// const nestedArray = [1, [2, 3, [4, 5, [6, 2, [7, 8, 1]]]], [9, 10, [10, 11]]];

// console.log(deepflattenarray(nestedArray));

  // 4️⃣ Find the highest-paid employee in each department

// let highestSalary = employees.reduce((acc,val)=>{
//     if(!acc[val.department]){
//         acc[val.department] = {maxSalary : 0};
//     }
//     if(acc[val.department].maxSalary < val.salary){
//       acc[val.department].maxSalary = val.salary ;
//     }
//     return acc;
// },{})

// console.log(highestSalary)

// 4️⃣ Find the highest-paid employee in each department

// let highestPaying = employees.reduce((acc,empl)=>{
//     if(!acc[empl.department]){
//         acc[empl.department] = {maxSalar : 0};
//     }
//     if(acc[empl.department].maxSalar < empl.salary){
//        acc[empl.department].maxSalar = empl.salary
//     }
//     return acc;
// },{})

// console.log(highestPaying);

  // 5️⃣ Get the total salary expense for each department

//   let totalSalary = employees.reduce((acc,empl)=>{
//     if(!acc[empl.department]){
//         acc[empl.department] = empl.salary
//     }else{
//         acc[empl.department] += empl.salary 
//     }
//     return acc;
//   },{})

//  let totalSalary = employees.reduce((acc,empl)=>{
//     acc[empl.department] = (acc[empl.department] || 0) + empl.salary;
//     return acc;
// },{})

//   console.log(totalSalary);

// console.log("Start");
// setTimeout(()=>{
//   console.log("setTimeout")
// },0)
// promise.resolve().then(()=>{
//     console.log("promise1")
// })

// promise.resolve().then(()=>{
//     console.log("promise2");
//     setTimeout(()=>{
//     console.log("setTimeout inside promise")
//     },0)
// })

// async function asyncfunction(){
//     console.log("async operation start");
//     await promise.resolve();
//     console.log("async function end")
// }

// asyncfunction()

// console.log("end");