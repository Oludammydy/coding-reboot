// Classwork Day 4
// Arrays

const hospitals = [
    "Ife Hospital Unit (IHU)",
    "Wesley Guild Hospital (WGH)",
    "Urban Comprehensive Health Centre (UCHC)",
    "Rural Comprehensive Health Centre (RCHC)",
    "Multipurpose Health Centre"
];

console.log(hospitals);
console.log(hospitals[0]);
console.log(hospitals[4]);
console.log(hospitals.length);

const language = [
    "JavaScript",
    "Python",
    "PHP",
    "SQL",
    ""
];

// Adding a new language using push:
language.push("Laravel");

console.log(language);

// Removing the last language using pop:
language.pop();

console.log(language)