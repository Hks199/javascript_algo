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
        my address is Gram ${address} Jila ${village}`)
    }
} // this refers to the object which is passed as a parameter in call method

let teacher = { 
    name: "Sachin",
    age: 25,
    phone_Number: "9518545027"
}

// student.display_details.call(teacher,"Sakti CG","Borda"); // we can take the properties of other object and use in another object


// let stud = student.display_details.bind(teacher, "nagpur", "Bhilgao");
// stud();

// student.display_details.call(teacher, "Borda", "Sakti");

// student.display_details.apply(teacher, ["Borda", "Sakti"]);

// student.display_details.apply(teacher, ["Sakti CG","Borda"]);  // here we have to pass all the parameter inside array


// but if we talk about bind method similar to call but it gives function as a result;

let funct = student.display_details.bind(teacher,"BORDA","SAKTI");

funct()