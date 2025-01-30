let sentence = "Hey my  name is harish kumar sahu"
// let longestword = "";
// let count = 0;
// function longestwordDetector() {
//     let arr = sentence.split(" ");
//     // console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (longestword.length < arr[i].length) {
//                 longestword = arr[i];
//                 count = arr[i].length;
//             }
//         }
//     }
// }

// longestwordDetector();
// console.log(longestword + ":" + count)

// function longestwordDetector(sentence) {
//     let wordArr = sentence.trim().split(' ').sort((a, b) => { return a.length - b.length }).at(-1);
//     console.log(wordArr);
//     // return wordArr.at(-1);
// }
// longestwordDetector(sentence);

let wordArr = sentence.trim().split(' ').sort((a, b) => { return a.length - b.length });

let longestword = wordArr.reduce((acc, currVal) => {
    if (acc.length < currVal.length) {
        acc = currVal;
    }
    return acc
}, "")

console.log(longestword);