// function greet(greeting, a, b, c) {
//     console.log(`${greeting},${a}, ${b}, ${c} ${this.name} ${this.age}`);
// }

// const person = { name: 'John', age: 25 };

// greet.call(person, 'Hello', "everyone", "My", "name");


let student = {
    name: "Harish",
    age: 25,
    phone_Number: "9518545028",

    display_details: function (address, village) {
        console.log(`my name is ${this.name} my age is ${this.age} and my phone number is ${this.phone_Number} 
        my address ${address} and ${village}`)
    }
}

let teacher = {
    name: "Sachin",
    age: 25,
    phone_Number: "9518545027"
}


let stud = student.display_details.bind(teacher, "nagpur", "Bhilgao");
stud();