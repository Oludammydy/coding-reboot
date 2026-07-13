// Week 1 - Day 3
// Functions

function greet() {
    console.log("Hello, welcome to Coding Reboot!");
}

greet();

function greets(name) {
    console.log(`Hello ${name}, welcome back!`);
}

greets("Oluwadamilola");
greets("John");
greets("Mary");

function greetPatient(name, age, location) {
    console.log(`Hello ${name}, you are ${age} years old, who lives in ${location}.`);
}

greetPatient("Oluwadamilola", 39, "Lagos");



function introduce(name, age) {
    console.log(`${name} is ${age} years old.`);
}

introduce("Oluwadamilola", 39);
introduce("Grace", 34);


function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

const age = calculateAge(1985);
console.log(`You are ${age} years old.`);


function addNumbers(a, b) {
    return a + b;
}

const result = addNumbers(15, 10);

console.log(result);


function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

const bmiResult = calculateBMI(70, 1.75);
console.log(`Your BMI is ${bmiResult.toFixed(2)}.`);

const bmi = calculateBMI(84, 1.78);

console.log(bmi);