// let i;
// function outer() {
//     let arr = [];
//     for (i = 0; i < 4; i++) {
//         // storing anonymous function
//         arr[i] = function () { return i; }
//     }

//     // returning the array.
//     return arr;
// }

// let get_arr = outer();

// console.log(get_arr[0]());
// console.log(get_arr[1]());
// console.log(get_arr[2]());
// console.log(get_arr[3]());


// function outer(){
//     let i;
//     let arr = [];

//     function inner(val){
//         arr[i] = function(){return val};
//     }

//     for(i = 0; i < 4; i++){
//         inner(i);
//     }

//     return arr;
// }

// let get_arr =  outer();

// console.log(get_arr[0]());
// console.log(get_arr[1]());
// console.log(get_arr[2]());
// console.log(get_arr[3]());
// console.log(get_arr);


// function x(){
//     for(var i=0; i<5; i++){
//       function close(x){
//             setTimeout(function(){
//                console.log(x)
//             },i*3000);
//         };
//         close(i)  
//     }
//     console.log("Namaste JavaScript");
// };
// x();


// function outermost(){
//     function outer(){
//        function inner(){
//          console.log(a);
//      }
//      return inner;
//  }
//   return outer;
// }

//  const outer_func = outermost();
//  let a = 10;
//  outer_func()();

// function outer(){

//     var count = 0;

//     function changedBy(val){
//         count += val
//     }
//     return{
//         increment : function(){
//             changedBy(1);
//         },

//         decrement : function(){
//            changedBy(-1);
//         },

//         value : function(){
//             return count;
//         }
//     }

//     }

//     const outer_Func = outer();

//     outer_Func.increment();
//     console.log(outer_Func.value());
//     outer_Func.increment()
//     console.log(outer_Func.value());
//     outer_Func.increment()
//     console.log(outer_Func.value());
//     outer_Func.increment()
//     console.log(outer_Func.value());



// let arr = [0, 1, 0, 2, 12, 0, 45, 55, 0, 98]
//   let  count = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] != 0){
//         let temp = arr[count];
//         arr[count] = arr[i];
//         arr[i] = temp; 
//         count++
//     }
// }
// console.log(arr);


// let str = {
//     Name : "123456789",
//     Address : "Nagpur"
// }
// console.log(str["Name"][0])
// const arr = str.split("");
// const arr = [...str]
// const arr = Array.from(str["Name"]);
// let total = 0;
// for(let i = 0; i < arr.length; i++){
//     total = total + Number(arr[i]);
// }
// console.log(total);

// let str = "HarishSahu";

// for(let i = 0; i < Name.length; i++){
//     console.log(Name[i]);
// }

// for(const letter of Name){
//     console.log(letter)
// }

// const arr = Array.from(Name).map((e)=>{
//       return e ;
// })
// console.log(arr)


// const charCode = str.charAt(1); // Get the Unicode value of the character at index 0
// console.log(charCode);

// let str = "harishkumar";

// let reversestr = [...str].reverse().join("");
// console.log(reversestr);

// function outer(){
//     let x = 0;
//     function inner(){
//         console.log(x);
//     }
// }

// outer()

// function Outer(){
//     var count = 0;
//     this.incrementcounter = function(){
//         count++;
//         // console.log(count);
//     }
//     this.decrementcounter = function(){
//         count--;
//         // console.log(count);
//     }
//     this.value = function(){
//         console.log(count)
//     }
// }
// let OuterMost = new Outer();
// OuterMost.incrementcounter();
// OuterMost.incrementcounter();
// OuterMost.incrementcounter();
// OuterMost.incrementcounter();
// OuterMost.value();
// console.log(count);

// let Name = "harishkumarsahu";

// let arr = Name.split("")

// let arr = Array.from(Name);
// console.log(arr);

// let Length = 7;
// if(arr.length%2==0){
//     Length = (arr.length-1)/2;
// }else{

// }
// for(let i = 0; i < Length; i++){
//     let temp = arr[i];
//     let tempt = arr[arr.length - i - 1];
//     arr[arr.length - i - 1] = arr[i]
//     arr[i] = tempt;
// }
// console.log(arr.join(""));

// a();

// console.log(c);

// console.log(b)
// function a(){
//     console.log("Called a");
// }

// var c = 12;
// var b = function(){
//     console.log("Called b");
// }

// (()=>{
//  console.log("function executed")
// })();

// let Name = "harishsahu";
// let xyz = Name.startsWith("har");
// console.log(xyz);

// var person = function(newName, newAge) {

//     // Private variables / properties
//     var name = newName;
//     var age = newAge;
//     function valueProvider(){
//       return value = 10;
//     }
//      return{

// Public methods
//  getName : function() {
//      return name;
//  },

// Private methods
//  getAge : function() {
//      return age;
//  },

//  getValue : function(){
//     return valueProvider()
//  },

// Public method, has acces to private methods
//         giveAge : function() {
//              return getAge();
//          }
//      }
// }

// var jack = person("Jack", 30);

// console.log(jack.name); // undefined
// console.log(jack.getName); // Jack
// console.log(jack.getAge()); // TypeError: jack.getAge is not a function
// console.log(jack.getAge); // undefined
// console.log(jack.giveAge()); // 30

// console.log(jack.getValue());


// var Student = function(Name,age,qualification){ 
//       var mobile_Number = "9518545028";
//       var address = "Nagpur";
//       this.Name = Name;
//       this.age = age;
//       this.qualification = qualification;

//       var contact_Details = function (){
//          return `Address: ${address} and Mobile_Number: ${mobile_Number}`;
//       }
//       this.provide_Student_details = function(){
//         console.log("Student Name is " + this.Name + ". He is " + this.age + " and he/she is in " + this.qualification + " Class" )
//       }
//       this.provide_Students_Contact_details = function(){
//         return contact_Details();
//       }
// }

// var Student_Object = new Student("Harish","25","M.Tech");
// Student_Object.provide_Student_details();

// var contact = Student_Object.provide_Students_Contact_details();

// console.log(contact);



// var authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NWE4ZDdjZDAyNmZmMTAwMTQwMDQ3OTkiLCJpYXQiOjE3MDc3Mzk4OTZ9.V4y-AN2Dcf-Ttf0NcNqYi1Pqcw1sDJFVxO4cz_RtS9I"
// var token = authorization.split(" ")[1];
// console.log(token)

// const person = {
//     name : "Harish",
//     age : 25,
//     person_details : function(){
//         return `Hello ${this.name}, you are ${this.age} years old`
//     }
// }
// console.log(person.person_details())


// const Name = "Harish";

// function user(){
//     return Name;
// }
// console.log(user());



// First Class Function Example

// const candidate_details = function(name, age, qualification){
//        console.log(`Name : ${name}, Age : ${age}, Qualification : ${qualification}`);
// } 

// function call_candidate_details(candidate, name, age, qualification ){
//        return candidate(name, age, qualification);
// }

// call_candidate_details(candidate_details, "Harish", "25", "B.tech.")


// Higher Order Function
// When a function is returning to another function is known as Higher Order Function
// const greet = function(name){
//     return function(message){
//         console.log(`Hi ${name} ${message}`)
//     }
// }

// let greeting = greet("harish");
// greeting("Welcome to My Villa")

// When a function taking as a argument to another function is known as Higher Order Function

// function greet(name){
//    return `Hi! ${name}`
// }

// function saySomething(greeting,name,message){
//     console.log(`${greeting(name)} ${message}`)
// }
// saySomething(greet,"Harish","Welcome to My Presentation on the the Topic JavaScript Tutorial")

// const Name = "harishkumarsahu";
// const arr = Name.split("");
// console.log(arr);

//  find the length of the longest substring without repeating characters.****************************** 

// let istrue = false;
// let count = 0;
// for(let i = 0; i < Name.length; i++){
//     // console.log(Name[i])
//     for(let j = 0; j < i; j++ ){
//         if(Name[i]==Name[j]){
//             istrue = true
//         }
//     }
//     if(istrue){
//         break;
//     }
//     count++;
// }
// console.log(count);

// let radius = [5, 15, 8, 4] ;

// function area(radius){
//     return Math.PI * radius * radius;
// }

// // console.log(radius.map(area));

// function calulate(area,radius){
//     let output = [];
//      for(let i = 0; i < radius.length; i++){
//           output.push(area(radius[i]));
//      }
//      console.log(output);
// }

// calulate(area,radius);

// console.log("start");

// setTimeout(function(){
//     console.log("CallBack")
// },1000)

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000){
//     endDate = new Date().getTime();
// }

// console.log("end")

// let arr = [1,2,3,7,8,9,4,5,6,10];

// arr.filter((e)=>e>5)



// var arr = [1,2,3,4,5,6,7,8,9,10,11];

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];



// console.log(arr.filter((e)=>{return e>5}));

// console.log(arr.map((e)=> {return e*5}));

// arr.forEach((e)=>{console.log(e)})

// *******************************************************************************************

// const output = users.reduce((prevVal, currVal) => {
//     if (currVal.age < 30) {
//       prevVal.push(currVal.firstName);
//     }
//     return prevVal;
//   }, []);


// ************************************************************************************************
// let arr = [1,2,3,4,56,78,9]

// let maxValue = arr.reduce(function(preVal, currVal){
//       if(preVal<currVal){
//         preVal = currVal;
//       }
//       return preVal;
// },0)

// console.log(maxValue);

// let users = [
// {firstName : "Harish", lastName : "Sahu", age : 25 },
// {firstName : "Shubham", lastName : "Patil", age : 28 },
// {firstName : "Ankush", lastName : "Singh", age : 28 },
// {firstName : "Akshay", lastName : "Singh", age : 40 }
// ]

// let maxValue = users.reduce(function(preVal, currVal){
//          if(preVal<currVal.age){
//          preVal = currVal.age;
//        }
//       return preVal;
//  },0)

// console.log(maxValue);

// let obj = {};

// obj["name"] = 1;
// obj["name"] = 2;

// console.log(obj);

// let requestedName = users.reduce(function(acc,curr){
//        if(acc[curr.age]){
//            acc[curr.age] = ++acc[curr.age]
//        }else{
//            acc[curr.age] = 1;
//        }
//        return acc;
// },{})

// console.log(requestedName)

// let output = users.filter((e)=>{return e.age < 30}).map((e)=>{return (e.firstName)});
// console.log(output)

// let count = 1;
// let output = users.reduce((acc,curr)=>{
//     if(curr.age < 30){
//         acc[count] = curr.firstName;
//         count++;
//     }
//     return acc;
// },{})

// console.log(output)

// const transactions = [
//     { id: 1, type: 'debit', amount: 50 },
//     { id: 2, type: 'credit', amount: 100 },
//     { id: 3, type: 'debit', amount: 75 },
//     { id: 4, type: 'credit', amount: 200 },
//     { id: 5, type: 'debit', amount: 150 }
//   ];


//   let output = transactions.reduce(function(acc,curr){
//      acc =  acc + curr.amount;
//      return acc;
//   },0)

//   console.log(output);

// let output = transactions.reduce(function(acc, curr){
//     if(!acc[curr.type]){
//         acc[curr.type] = curr.amount;
//     }else{
//         acc[curr.type] = acc[curr.type] + curr.amount;
//     }

//     return acc;

// },{})

// console.log(output)

// let output = transactions.reduce(function(acc, curr){
//      if(!acc[curr.type]){
//         acc[curr.type] = [curr];
//      }else{
//         acc[curr.type].push(curr);
//      }
//      return acc
// },{})

// console.log(output);

// let output = transactions.reduce(function(acc,curr){
//     if(acc < curr.amount){
//         acc = curr.amount;
//     }
//     return acc;
// },0)

// console.log(output);

// let arr = [1,2,3,4,5,6,7,8,9]

// let output = arr.reduce(function(acc,curr,i){
//     console.log(i);
//     acc = acc + curr;
//      return acc ;
// })

// console.log(output);

// let output = arr.filter((d)=>{
//   return d%4==0
// })
// console.log(output)


// let name = {
//     firstname : "Harish", 
//     lastname : "Sahu",
//     printname : function(village, district){
//         console.log(this.firstname + " " + this.lastname + " " + village + " " + district);
//     }
// }

// name.printname();

// let name1 = {
//     firstname : "Pankaj", 
//     lastname : "Sahu"
// }

// let Name = name.printname.bind(name1,"Borda", "Sakti");

// Name();

// const fruits = ['banana', 'apple', 'orange', 'grapes'];

// fruits.sort();

// console.log(fruits);

// let number =  [4,7,5,8,1,2,7]

// number.sort((a,b)=>{
//   return  a-b;
// })

// console.log(number);


function getReqChair_fromEachRoom(rooms, requiredChairs) {
   let required_chairs = requiredChairs;
   let chair_Taken = 0;
   const result = rooms.map(room => {
      const [occupiedChairs, numberOfChairs] = room;
      // return (chairs - occupants.length);
      const freeChairAvailableinEachRoom = numberOfChairs - occupiedChairs.length;
      const chairTakenFromEachRoom = Math.min(required_chairs, freeChairAvailableinEachRoom);
      required_chairs = required_chairs - chairTakenFromEachRoom;
      chair_Taken = chair_Taken + chairTakenFromEachRoom;
      return chairTakenFromEachRoom;
   })

   if (chair_Taken < requiredChairs) {
      return `Required ${requiredChairs - chair_Taken} More chair`
   }
   return result;
}

const meeting_rooms = [['XXX', 5], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 5], ['XXX', 3], ['XXX', 5]]
const required_chairs = 8;
console.log(getReqChair_fromEachRoom(meeting_rooms, required_chairs));