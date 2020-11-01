// All entities in JS are objects. Object is a parent entity for them. Object prototype includes a lot of
// properties and methods. We can call them for all children(objects which we created).
const persone = new Object({
    name: 'Alex',
    age: 22,
    greet: () => {
        console.log('Greet!');
    }
});
// We adding the 'sayHello' method for all Objects
Object.prototype.sayHello = function () {
    console.log('Hello!');
}
// Object tan9 inherited from person. All methods from person(parent) are available for tan9.
const tan9 = Object.create(persone);
tan9.name = 'Tan9';
// string is object too.
const str = new String('This is a string');