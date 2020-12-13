const myNumber = 42;

// localStorage.setItem('number', myNumber.toString());
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
localStorage.clear()

const object = {
    name: 'Alex',
    age: 22
}

localStorage.setItem('person', JSON.stringify(object));
// localStorage works only with the rows. Data from the local storage is available even after the page been updated
const raw = localStorage.getItem('person')
const person = JSON.parse(raw);
person.name = 'Gnat';

console.log(person);

