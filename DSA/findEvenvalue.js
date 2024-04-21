//Find even value from array make it, make it double and find array length;

let arr = [4, 7, 6, 8, 12, 10, 11, 13, 16, 19, 17];
let evenarray = [];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        let element = arr[i] * 2;
        evenarray.push(element);
        count++;
    }
}
console.log(evenarray, 'length :' + count);