let arr = [2, 4, 3, 1, 5];

// function bubblesort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//         console.log(arr);
//     }
//     // console.log(arr);
// }

// bubblesort(arr)

// function bubblesort(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length -1 - i; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     console.log(arr);
// }
// bubblesort(arr);


function bubblesort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}

bubblesort(arr)