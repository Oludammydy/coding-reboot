// Week 1 - Day 4
// Arrays

// Arrays are used to store multiple values in a single variable. They are ordered collections of elements, which can be of any data type, including numbers, strings, objects, and even other arrays.

// Creating an array
const patients = [
    "John",
    "Mary",
    "Mike",
    "Grace",
    "Sarah",
    "David"
];

console.log(patients);

const fruits = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry"
];

// Accessing Items
console.log(patients[0]);
console.log(patients[1]);
console.log(patients[2]);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(patients[4]);
console.log(patients[10]);


// Changing Items
patients[2] = "Michael";

console.log(patients);

// Finding the Number of Items
console.log(patients.length);
console.log(fruits.length);

// Adding Items
patients.push("Oluwadamilola");

console.log(patients);

// Removing the Last Item
patients.pop();

console.log(patients);

// Looping through an Array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 0; i < patients.length; i++) {
    console.log(patients[i]);
}

const fruit = [
    "John",
    "Mary",
    "Mike",
];

for (let i = 0; i < fruit.length; i++) {
    console.log(`${i + 1}. ${fruit[i]}`);
}

const patient = [
    "John",
    "Mary",
    "Mike"
];

console.log("Registered Patient:");

for (let i = 0; i < patient.length; i++) {
    console.log(`${i + 1}. ${patient[i]}`);
}

