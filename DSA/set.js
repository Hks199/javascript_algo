
// let fruits = ["mango", "Banana", "Apple", "Orange", "grapes", "mango"];

// let set = new Set(fruits);

// set.add("mango");

// console.log(set.has("mango"));

// console.log(set.delete("grapes"));


// let num = [4,5,6,8,7,1];
// let num2 = [7,5,42,38,1, ...num]

const admins = ['fdc123','wer345','aqw234','123sdr']
const users = ['iop346','wer345','ygh456','zxcv1245','123sdr', 'zcg230']
let newArray = [];
// let newArray = [...admins, ...users];

// let set = new Set(newArray);
// console.log(set);

let result = [...admins];

for(let i = 0; i < users.length; i++){
    let isduplicste = false
    for(let j = 0; j < result.length; j++){
        if(users[i] === result[j]){
          isduplicste = true;
        }
    }
    if(isduplicate == false){

        result.push(users[i]);
    }
}

console.log(result);