
let data = new Map([
    ['name', 'Harish'],
    ['true', 'boolean'],
    ['25', 'number']
])

// data.set('color', 'green');

// console.log(data.size);

// console.log(data.has('name'));

// console.log(data.get('25'));

// data.forEach((x, y) => {
//     console.log(`${x} ${y}`);
// })
// data.delete('true')

// console.log(data);

// data.clear();

// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const map = new Map([
    ["name","harish"],
    ["true", "boolean"],
    [25, "number"]
]);

// arr.forEach((element)=>{
//     map.set(element,(map.get(element)||0) +1);
// })
console.log(map);

// console.log(map.keys());

// console.log(map.values());

// map.set("name", "harish");
// map.set("class", 5);

// console.log(map);

// for(let [key,value] of map){
//     console.log(`${key} : ${value}`);
// }

let keyarr = [];
let valuearr = [];

// for(let [key,value] of map){
//    keyarr.push(key);
//    valuearr.push(value);
// }
// console.log(valuearr);
// console.log(keyarr);

// for(let key of map.keys()){
//     keyarr.push(key);
// }
// console.log(keyarr)

for(let value of map.values()){
    valuearr.push(value);
}

console.log(valuearr);