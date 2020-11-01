// THIS always points to the OBJECT in the context of which it was called

function hello() {
    console.log('Hello', this);
}

const person = {
  name: 'Alex',
  age: 22,
  sayHello: hello,
  helloWindow: hello.bind(window), // bind returns a new function and sets this keyword to the provided value
  logInfo: function(phone, job) {
      console.group('Person info:');
      console.log(`Name is ${this.name}`);
      console.log(`Age is ${this.age}`);
      console.log(`Phone is ${phone}`);
      console.log(`Job is ${job}`);
      console.groupEnd();
  }
};
/* If we will call the functions in the browser
 hello(); - this will return pointer on the global WINDOW object
 person.sayHello(); - this will return pointer on the PERSON
 person.helloWindow(); - return pointer to window
 */

const alex = {
    name: 'Alex',
    age: 25
}

hello();
person.sayHello();
person.logInfo();
person.logInfo.bind(alex, '123-33-444-555', 'sdet')();
/*Function call via func.apply works similarly to func.call, but receives the array of args instead of list.*/
person.logInfo.call(alex, '123-33-444-555', 'sdet');
person.logInfo.apply(alex, ['123-33-444-555', 'sdet']);

// What we will get here???
const person2 = {
    name: 'Vlad',
    age: 30,
    logInfo: () => {
        console.group('Person info:');
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.groupEnd();
    }
};


// Task: create function which will receives an array and Number as arguments and then each array's element should be
// multiplied on this Number. -> Make this function as an array method

const array1 = [1,2,3,4,5];

// function multBy(arr, n) {
//     return arr.map(el => {
//         return el * n;
//     })
// }



Array.prototype.multBy = function (n) {
    // this points to element which will locate on the left side after dot: arrayName.multBy(2);
    return this.map(el => {
         return el * n;
    })
}

console.log(array1.multBy(5));