function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

//const result = calcValues(42, 10);
const [sum, sub = 'No subtraction', mult, ...other] = calcValues(42, 10); // the simplest way

// const sum = result[0];
// const sub = result[1];

//const [sum, sub] = result;

console.log(sum, sub, mult, other);

//Objects

const person = {
    name: 'Alex',
    age: 22,
    address: {
        country: 'Ukraine',
        city: 'Sumy'
    }
}

// const name = person.name
// const {
//     name: firstName = 'NoName',
//     age,
//     car = 'BMW',
//     address: {city: homeTown, country}
// } = person;
const {name, ...info} = person;
//console.log(name, age, car, homeTown, country);
console.log(name, info);

function logPerson({name, age}) {
    console.log(name + ' ' + age);
}
logPerson(person);