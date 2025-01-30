let arr = [4, 5, 7, 8, 2, 1, 6, 10]

let array = arr.sort((a, b) => { return a - b })
console.log(array);

function median(array) {
    if (array.length % 2 != 0) {
        let mid = Math.floor(array.length / 2);
        console.log('Median : ' + array[mid]);
    } else {
        let mid = Math.floor(array.length / 2);
        console.log('Median : ' + (array[mid] + array[mid - 1]) / 2);
    }
}

median(array);