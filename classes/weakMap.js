let obj = {name: 'weakMap'};

// const arr = [obj];
//
// obj = null;
//
// console.log(arr[0]); // returns object which still presence in the memory

const map = new WeakMap([
    [obj, 'obj data']
]);

//get set delete has

obj = null;

console.log(map.get(obj)) // undefined - obj was removed from memory

// ======================================================================== //

const cache = new WeakMap()

function cacheUser(user) {
    if(!cache.has(user)) {
       cache.set(user, Date.now());
    }
    return cache.get(user);
}

let tan9 = {name: 'tan9'}
let alex = {name: 'alex'}

cacheUser(tan9);
cacheUser(alex);

tan9 = null;

console.log(cache.has(alex));
console.log(cache.has(tan9));
