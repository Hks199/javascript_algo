let arr = [1, 8, 4, 5, 7, 3, 12, 11, 14, 18, 15, 17, 16]

arr.sort((a, b) => {
    return a - b
})
// console.log(arr)

let start = 0;
let end = arr.length;
let position = undefined;
let find = 14;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == find) {
        position = mid;
        break;
    } else if (arr[mid] < find) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(position);