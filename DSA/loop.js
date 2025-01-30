let arr  = [1,8,5,4,9,8];

// let newarry = arr.map((num)=>{   // can not use for filteration user for transformation only
//     if(num > 5){
//        return num;
//     }
// })

// console.log(newarry)

// arr.forEach((num)=>{
//     if(num > 5){
//         console.log(num);
//     }
// })

// const newarray = arr.filter((num)=>{
//     return num > 5;
// })

// console.log(newarray)

const arr1 = [1,2,3,4,5,6];
const arr2 = [4,5,6,7,8,9];

// let arr3 = [...arr1,...arr2];

// console.log(arr3);

for(let i = 0; i < arr1.length; i++){
    let isduplicate = false;
    for(let j = 0; j < arr2.length; j++){
       if(arr1[i]===arr2[j]){
           isduplicate = true;
       }
    }
    if(!isduplicate){
       arr2.push(arr1[i]);
    }
}
console.log(arr2.sort((a,b)=>{
    return a - b;
}));