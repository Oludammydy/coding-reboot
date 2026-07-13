// Functions classwork

function profile(name, profession, favouriteLanguage) {
    console.log(`Hello ${name}, you are a ${profession} by Profession, your favorite programming language is ${favouriteLanguage}.`);
}

profile("Oluwadamilola", "Public Health Researcher & Cardiac Perfusionist", "JavaScript");


function multiplyNumbers(a, b) {
    return a * b;
}

const result = multiplyNumbers(5, 8);

console.log(result);


function checkAge(age) {
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }
}

const patientAge = 17;
checkAge(patientAge);

const patientAge2 = 25;
checkAge(patientAge2);


function registerPatient(name, age, emergencyStatus) {
    if (age >= 18 && emergencyStatus) {
        console.log(`Patient ${name} is an adult and requires emergency care, Proceed directly to Emergency Department.`);
    } else if (age >= 18) {
        console.log(`Patient ${name} is an adult and does not require emergency care, Proceed to Reception.`);
    } else {
        console.log(`Patient ${name} is a minor.`);
    }  
}

registerPatient("John", 65, true);
registerPatient("Mary", 24, false);
registerPatient("Mike", 16, false);