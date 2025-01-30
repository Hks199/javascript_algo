// function generateFibonacci(limit) {
//     let fibSeries = [];
//     let a = 0;
//     let b = 1;
//     let nextTerm = a + b;
//     fibSeries.push(a);
//     fibSeries.push(b);
//     while (nextTerm <= limit) {
//         fibSeries.push(nextTerm);
//         a = b;
//         b = nextTerm;
//         nextTerm = a + b;
//     }

//     return fibSeries;
// }

// console.log(generateFibonacci(100));


function generatefibonaci(){
    let fibonacci = [];
    let a = 0;
    let b = 1;
    let nextTerm = a + b;
    fibonacci.push(a);
    fibonacci.push(b);
    while(nextTerm < 100){
        fibonacci.push(nextTerm);
        a = b;
        b = nextTerm;
        nextTerm = a + b;
    }
    return fibonacci;
}
console.log(generatefibonaci());