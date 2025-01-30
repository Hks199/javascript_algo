// let Data = 14578954;
// var word = "";
// function checkPalindrombyrecursion(str, i) {
//     console.log(str, i, word);
//     if (i >= 0) {
//         word = word + str[i];
//         checkPalindrombyrecursion(str, i - 1);
//     } else {
//         if (word == str) {
//             console.log(word + " is palindrom");
//         } else {
//             console.log(word + " is not palindrom");
//         }
//     }
// }
// checkPalindrombyrecursion(Data.toString(), Data.toString().length - 1);

// let data = 1221;
// function checkpalindrom(str) {
//     let word = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         word = word + str[i];
//     }
//     if (word == str) {
//         console.log(word + " is palindrom");
//     } else {
//         console.log(word + " is not palindrom");
//     }
// }

// checkpalindrom(data.toString());

let word = "123321"
// function checkPalindrom(str){
//     let data = '';
//    for(let i = str.length - 1; i >= 0; i-- ){
//        data = data.concat(str[i]);
//    }
//    if(str === data){
//     console.log("Its a palindrom")
//    }else{
//     console.log("Its not palindrom")
//    }
// }

// checkPalindrom(word.toString())


// let data = '';
// function recursivePalindrom(str, length){
//     if(length >= 0 ){
//        data = data + str[length]
//        recursivePalindrom(str,length - 1)
//     }else{
//         if(str == data){
//             console.log(data + " Its a palindrom")
//            }else{
//             console.log(data + " Its not palindrom")
//        }
//     }
    
// }

// recursivePalindrom(word.toString(),word.toString().length - 1);



let str1 = 'harishsahuuhashsirah';
let str2 = ''

for(let i = str1.length - 1; i >= 0; i--){
    str2 = str2 + str1[i];
}

if(str1 === str2){
    console.log('Its a Palindrom')
}else{
    console.log("Its not Palindrom")
}