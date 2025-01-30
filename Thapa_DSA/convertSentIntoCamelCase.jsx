let sent = "harish kumar sahu";

let arr = sent.split(' ');
// console.log(arr);

let camelCase = arr.map((currVal, index) => {
    if (index == 0) {
        return currVal.toLowerCase()
    } else {
        return currVal.charAt(0).toUpperCase() + currVal.slice(1).toLowerCase();
    }
})


camelCase = camelCase.join('');
console.log(camelCase);