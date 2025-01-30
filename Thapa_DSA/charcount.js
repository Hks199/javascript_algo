let word = "icecreamIceiceeee";
// let count = 0;
// word = word.toLowerCase().split('').map((ele) => {
//     if (ele == 'i') {
//         count++
//     }
// })
// console.log(count);
// console.log(word.toLowerCase());


// let letter = word.toLowerCase().split('').reduce((acc, currVal) => {
//     if (currVal === 'i') {
//         acc++;
//     }
//     return acc;
// }, 0)

// console.log(letter);


// let count = 0;
// let letter_count = word.toLowerCase().split('').map((ele)=>{
//     if(ele == "i"){
//       count++;
//     }
// })

// console.log(count);

let letter = word.toLowerCase().split('').reduce((acc, currval)=>{
    if(currval == 'i'){
        acc++;
    }
    return acc
},0)

console.log(letter);