let num = 5;

function findFactorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * findFactorial(num - 1)
    }
}

console.log(findFactorial(num));