// let arr = [5, 3, 2, 1];

// function selectionsort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = arr[i];
//         // console.log(min + "h");
//         for (let j = i + 1; j < arr.length; j++) {
//             if (min > arr[j]) {
//                 let temp = arr[j];
//                 arr[j] = min;
//                 min = temp;
//             }
//             console.log(arr);
//         }
//         console.log(arr + "h");
//         arr[i] = min;

//     }
//     console.log(arr);
// }

// selectionsort(arr)


//************************************bubble sort********************/

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j + 1];
//             arr[j + 1] = arr[j];
//             arr[j] = temp;
//         }
//     }
//     console.log(arr);
// }

//************************************Insertion sort **************************************** */

let arr = [23, 1, 10, 5, 2];

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
        if (arr[j] < arr[j - 1]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
    console.log(arr);
}