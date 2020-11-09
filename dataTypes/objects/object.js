const testObj = {
    name: 'Gnat',
    age: 25,
    properties: {
        house1: '5 flats',
        house2: '10 flats'
    }
};

const fruits = {
    apple: 'green',
    banana: 'yellow',
    orange: 'orange',
    peach: 'peachy'
}

/*Both for..in and for..of are looping constructs which are used to iterate over data structures.
 The only difference between them is the entities they iterate over:

for..in iterates over all enumerable property keys of an object
for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.
*/

for (const fruit in fruits) {console.log(fruit)} // ok
// for (const fruit of fruits) {console.log(fruit)} // error

/* Objects are not 8 iterable entities(but arrays are). That why we couldn't use filter(), map(), forEach(), for of etc
* for objects. However, js objects have useful methods which transform them to iterable entities:
* Object.keys(obj)
* Object.values(obj)
* Object.entries(obj)
* */
const keys = Object.keys(fruits);
const values = Object.values(fruits);
const entries = Object.entries(fruits);

console.log(keys);
console.log(values);
console.log(entries);

// ===============================================================================//
/* add obj properties and methods */
const emptyObj = {};
emptyObj.name = 'Alex';
emptyObj.role = 'tutor';
emptyObj.getInfo = function () {
    console.log(`User "${emptyObj.name}" has role "${emptyObj.role}"`);
}

emptyObj.getInfo();

// ===============================================================================//

for (const testObjKey in testObj) {
    if(typeof testObj[testObjKey] === "object") {
        for (const i in testObj[testObjKey]) {
            console.log(`Key ${i} has value ${testObj[testObjKey][i]}`);
        }
    } else
        console.log(`Key ${testObjKey} has value ${testObj[testObjKey]}`);
}

const {house1, house2} = testObj.properties;

console.log(house1);