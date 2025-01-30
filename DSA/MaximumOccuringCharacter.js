

// let str1 = "harishkumarsahu@gmail.com";
// let obj = {};
// let count = 0;
// let char = '';
// // function maximumOccuringCharacter(str1) {
// //     for (ch of str1) {
// //         if (obj[ch]) {
// //             obj[ch]++;
// //         } else {
// //             obj[ch] = 1;
// //         }
// //     }
// //     for (let ch in obj) {
// //         if (obj[ch] > count) {
// //             count = obj[ch];
// //             char = ch;
// //         }
// //     }
// //     console.log(`${char} : ${count}`);
// // }

// // maximumOccuringCharacter(str1);

// for(ch of str1){
//     if(obj[ch]){
//        obj[ch]++;
//     }else{
//         obj[ch] = 1;
//     }
// }
// // console.log(obj);

// for(let ch in obj){
//     if(obj[ch] > count){
//        char = ch;
//        count = obj[ch];
//     }
// }
// console.log(`${char} : ${count}`);

let str1 = "Mynameisharishshyamkumarsahu"
str1 = str1.toLowerCase();
let count = 0
let char = '';
console.log(str1);
let obj = {};
for(let ch of str1){
    if(obj[ch]){
        obj[ch]++;
    }else{
        obj[ch] = 1;
    }
}
console.log(obj);

for(let ch in obj){
   if(obj[ch] > count){
      count = obj[ch];
      char = ch
   }
}
console.log(`${char} : ${count}`);