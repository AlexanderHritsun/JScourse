const test = Object.assign( { a: { a1: 10 }, b1: 100 }, { a: { a2: 20 }, b2: 200 } )
console.log(test);

const arr = [1, 2, 3]
const arr2 = arr.reduce( (element) => {
    const obj = {};
    obj[element] = element
} )

console.log('Reducer', arr2);
