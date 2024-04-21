

let str1 = "harishkumarsahu@gmail.com";
let obj = {};
let count = 0;
let char = '';
function maximumOccuringCharacter(str1) {
    for (ch of str1) {
        if (obj[ch]) {
            obj[ch]++;
        } else {
            obj[ch] = 1;
        }
    }
    for (let ch in obj) {
        if (obj[ch] > count) {
            count = obj[ch];
            char = ch;
        }
    }
    console.log(`${char} : ${count}`);
}

maximumOccuringCharacter(str1);