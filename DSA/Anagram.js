
// function anagram(str01, str02) {
//     let str1 = str01.split('').sort().join('');
//     let str2 = str02.split('').sort().join('');
//     if (str1 === str2) {
//         console.log('anagram')
//     } else {
//         console.log('not anagram');
//     }
// }

// anagram("abccba", "abccba");


// let str = "harishkumarsahu".split('').sort().join();

// console.log(str);

// let obj1 = {}
// let str = "harishkumarsahu"
// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (obj1[char]) {
//         obj1[char]++;
//     } else {
//         obj1[char] = 1;
//     }
// }

// let obj2 = {}
// let str1 = "harishkumarsahu"
// for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     if (obj2[char]) {
//         obj2[char]++;
//     } else {
//         obj2[char] = 1;
//     }
// }

// console.log(obj1 == obj2);

// let str = "harishkumar";

// let arr = ['s', 't', 'a', 'e'];

// arr.sort();

// console.log(arr);



//************************************************************************ */

// let str = "harishkumarsahu".split('').sort().join();

// console.log(str);

// let obj1 = {}
// let str = "harishkumarsahu"
// let str1 = "harishkumarsahuj"
// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (obj1[char]) {
//         obj1[char]++;
//     } else {
//         obj1[char] = 1;
//     }
// }

// for (ch of str1) {
//     if (!obj1[ch]) {
//         return false;
//     }
//     obj1[ch]--
// }

// return true

//****************************************************************************** */

// function checkanagram(str, str1) {
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (obj1[char]) {
//             obj1[char]++;
//         } else {
//             obj1[char] = 1;
//         }
//     }

//     for (ch of str1) {
//         if (!obj1[ch]) {
//             return false;
//         }
//         obj1[ch]--
//     }

//     return true
// }
// console.log(checkanagram(str, str1))


//************************************************************************************* */
// let str1 = "myname is harish kumar sahu";
// let str2 = "myname is harish kumar sahu";
// function Anagram(str1, str2) {
//     let str01 = str1.split('').sort().join();
//     // console.log(str01);
//     let str02 = str2.split('').sort().join();
//     // console.log(str02);
//     if (str01 == str02) {
//         console.log("anagram")
//     } else {
//         console.log("Not Anagram");
//     }
// }

// Anagram(str1, str2);

//*************************************************************************************** */

// let str1 = "myname is harish kumar sahu";
// let str2 = "myname is harish kumar sahu";
// let obj = {};
// function Anagram(str1, str2) {
//     for (ch of str1) {
//         if (obj[ch]) {
//             obj[ch]++
//         } else {
//             obj[ch] = 1;
//         }
//     }
//     console.log(obj);
//     for (ch of str2) {
//         if (!obj[ch]) {
//             return false
//         }
//         obj[ch]--
//     }
//     return true;
// }

// Anagram(str1, str2);

// console.log(Anagram(str1, str2));

let str1 = "myname is harish kumar sahu".replace(/[^a-zA-Z0-9]/g, '');
let str2 = "myname is harish kumar sahu".replace(/[^a-zA-Z0-9]/g, '');

console.log(str1);