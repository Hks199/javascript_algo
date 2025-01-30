
let arr = [8, 4, 12, 9, 20, 15]

// function descending_order(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let max = arr[i];
//         for (let j = i + 1; j < arr.length; j++) {
//             if (max < arr[j]) {
//                 let temp = arr[j];
//                 arr[j] = max;
//                 max = temp;
//             }
//         }
//         arr[i] = max
//     }
//     console.log(arr);
// }

// descending_order(arr);

// bubble sort

function bubblesort(Array){
   for(let i = 0; i < Array.length; i++){
      for(let j = 0; j < Array.length - 1 - i; j++){
         if(Array[j] < Array[j+1]){
             let temp = Array[j];
             Array[j] =  Array[j+1];
             Array[j+1] = temp;
         }
      }
   }
   console.log(Array);
}

bubblesort(arr)

