const emp_List = [
    { name: "harish", salary: 22500 },
    { name: "ankush", salary: 22000 },
    { name: "manish", salary: 28000 },
    { name: "himanshu", salary: 24000 },
    { name: "sourabh", salary: 29500 },
    { name: "shubham", salary: 26000 },
    { name: "nikhil", salary: 21000 },
    { name: "divesh", salary: 21500 },
    { name: "hitesh", salary: 29000 },

]


emp_List.sort((a, b) => {
    return b.salary - a.salary;
})

const top_five = []

for (let i = 0; i < 5; i++) {
    top_five.push(emp_List[i]);
}

console.log(top_five);