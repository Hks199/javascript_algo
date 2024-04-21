let Data = 14578954;
var word = "";
function checkPalindrombyrecursion(str, i) {
    console.log(str, i, word);
    if (i >= 0) {
        word = word + str[i];
        checkPalindrombyrecursion(str, i - 1);
    } else {
        if (word == str) {
            console.log(word + " is palindrom");
        } else {
            console.log(word + " is not palindrom");
        }
    }
}
checkPalindrombyrecursion(Data.toString(), Data.toString().length - 1);

let data = 1215;
function checkpalindrom(str) {
    let word = '';
    for (let i = str.i - 1; i >= 0; i--) {
        word = word + str[i];
    }
    if (word == str) {
        console.log(word + " is palindrom");
    } else {
        console.log(word + " is not palindrom");
    }
}

checkpalindrom(data.toString())