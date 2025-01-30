let arr = [1, 5, 4, 8, 6, 7, 1, 2, 4, 5, 6, 3]
let count = {};
function countRepetation(count) {
    let max = 0;
    let maxRepeatedNumber = 0;
    for (element of arr) {
        count[element] = (count[element] || 0) + 1;

        if (count[element] > max) {
            max = count[element];
            maxRepeatedNumber = element;
        }
    }
    console.log(`max : ${max}, maxRepeatedNumber : ${maxRepeatedNumber}`)

}

countRepetation(count);
console.log(count)
