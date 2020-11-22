const set = new Set([1, 2 ,3, 3, 3, 4, 5, 6]);

console.log(set);

set.add(10).add(20).add(30).add(20);

// console.log(set);
// console.log(set.has(42));
// console.log(set.size);
// console.log(set.delete(1));
// console.log(set.size);
// set.clear();
// console.log(set.size);

// console.log(set.values());
// console.log(set.keys()); // keys === values

// ========================================================================================== //

function uniqueValues(array) {
    return [...new Set(array)];
}

console.log(uniqueValues([1, 1, 1, 2, 2, 3, 7, 7, 10]));