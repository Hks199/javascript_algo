let a = -12;
let b = 12;

// function returnArray(a, b) {
//     let arr = [];
//     for (let i = a; i <= b; i++) {
//         arr.push(i);
//     }
//     console.log(arr);
// }

// returnArray(a, b)


//recursive approach

let arr = [];
function returnArray(a, b) {
    if (a <= b) {
        arr.push(a);
        returnArray(a + 1, b);
    }
}

returnArray(a, b);
console.log(arr);