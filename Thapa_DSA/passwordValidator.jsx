

let hasUpperCase = false
let hasLowerCase = false
let hasNumber = false

function passwordValidator(password) {
    for (let char of password) {

        if (char.charCodeAt(0) > 65 && char.charCodeAt(0) < 90) {
            hasUpperCase = true;
        } else if (char.charCodeAt(0) > 97 && char.charCodeAt(0) < 122) {
            hasLowerCase = true;
        } else if (!isNaN(Number(char))) {
            hasNumber = true;
        }
    }
    if (hasUpperCase === true && hasLowerCase === true && hasNumber === true) {
        console.log("Valid Password");
    } else {
        console.log("Not Valid Password please Make password according to given notes");
    }
}

passwordValidator("harISh199");