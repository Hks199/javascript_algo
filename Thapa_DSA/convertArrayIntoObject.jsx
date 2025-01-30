let arr = [5, 4, 8, 9, 7, 2, 6, 5]
let set = new Set(arr);
console.log(set);

let array = [...set];
console.log(array);

let obj = {};

function ConvertArrayIntoObject(array) {
    for (let i = 0; i < array.length; i++) {
        obj[i + 1] = array[i];
    }
    console.log(obj);
}

ConvertArrayIntoObject(array);