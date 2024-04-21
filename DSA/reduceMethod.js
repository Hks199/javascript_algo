const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 78 },
    { name: 'David', score: 92 },
    { name: 'Eve', score: 88 }
];

// const total_score = students.reduce((accumulator, current) => {

//     if (accumulator < current.score) {
//         accumulator = current.score
//     }

//     return accumulator

// }, 0)
// console.log(total_score);

// const total_score = students.reduce((accumulator, current) => {

//     if (accumulator.length == 0) {
//         accumulator.push(current);
//     } else {
//         if (accumulator[0].score < current.score)
//             accumulator[0].score = current.score
//     }

//     return accumulator

// }, [])
// console.log(total_score);

