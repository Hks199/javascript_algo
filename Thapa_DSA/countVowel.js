let str = "harish kumar sahu "; //find number of vowel

let word = str.toLowerCase().split('')

let vowel = ['a', 'e', 'i', 'o', 'u']
let count = 0;
for (char of word) {
    if (vowel.includes(char)) {
        count++;
    }
}
console.log(count);