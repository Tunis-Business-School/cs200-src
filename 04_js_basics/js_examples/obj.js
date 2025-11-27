let person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
};

let personName = person.name; // Dot notation
let personAge = person['age']; // Bracket notation

person.location = 'New York'; // Adding a property
person.age = 31; // Modifying a property

delete person.occupation; // Removes 'occupation' property

let person2 = {
    name: 'John',
    greet: function () {
        return `Hello, my name is ${this.name}.`;
    }
};
console.log(person2.greet()); // Output: Hello, my name is John.

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

for (let key in person2) {
    console.log(`${key}: ${person[key]}`);
}