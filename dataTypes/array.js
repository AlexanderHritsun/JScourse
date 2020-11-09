const cars = [
    { brand: 'audi', horsePowers: 220, price: 80500 },
    { brand: 'bmw', horsePowers: 245, price: 22500 },
    { brand: 'acura', horsePowers: 197, price: 18700 },
    { brand: 'volkswagen', horsePowers: 186, price: 13400 },
    { brand: 'lamborghini', horsePowers: 600, price: 150000 },
]

for (let a of cars) {
    console.log(a);
}

// forEach

cars.forEach((car, index, cArray) => {
    console.log(car);
    console.log(index);
    console.log(cArray);
});

cars.forEach(car => console.log(car.price));

// Map

const cheapCars = cars.map(car => {
    if (car.price < 20000) {
        return car;
    }
})

console.log(cheapCars);

// Filter

// const powerCars = cars.filter(car => {
//     if (car.horsePowers > 200) {
//         return true;
//     }
// })

const powerCars = cars.filter(car => car.horsePowers > 200);

console.log(powerCars);

// Reduce

const amount = cars.reduce((total, car) => {
    return total + car.price;
}, 0); // 0 is a default total value

console.log(amount);

// Find
const audiInfo = cars.find(car => car.brand === 'audi');

console.log(audiInfo);

// FindIndex
const audiIndex = cars.findIndex(car => car.brand === 'audi');

console.log(audiIndex);

// ================================================================================== //

const newPrice = cars
    .filter(car => car.horsePowers > 200)
    .map(car => {
        return {
            info: `${car.brand} ${car.horsePowers}`,
            price: car.price * 1.25
        }
    })
    .reduce((total, car) => total + car.price);

console.log(newPrice);


// =================================================================================== //

// Some

const hasInexpensiveCars = cars.some(car => car.price > 80000);

console.log(hasInexpensiveCars) // true

// Every

const areAllCarsCheap = cars.every(car => car.price < 15000); // each car should cost less than 15ka to return true

console.log(areAllCarsCheap) // false

// =================================================================================== //

//arr.indexOf(item, from) search the item, from the index 'from' and return the element index of '-1'
//arr.lastIndexOf(item, from) makes the same but from the end of the array
//arr.includes(item, from) search the item and returns 'true' or 'false'

let array = [1,2,3];

console.log(array.indexOf(2)); //1
console.log(array.lastIndexOf(1)); //0
console.log(array.lastIndexOf(5)); //-1
console.log(array.includes(3)); //true

//find - search elements according to special conditions, search breaks when the first elements found

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); //undefined
console.log([4, 5, 8, 7].find(isPrime)); // 5
//filter works like find but returns all elements
console.log([4, 5, 8, 7].filter(isPrime)); //5,7

// =====================================================

//arr.slice([start], [end]) - returns subarrays from start till end indexes(the end index not includes)

let array2 = [1,2,3,4,5];
let slicedArray = array2.slice(1,3);
console.log(slicedArray); // 2,3

//can work with negative values. In this case we work from the end of array

let negativeSliced = array2.slice(-4, -1);
console.log(negativeSliced);

//arr.splice(index[, deleteCount, elem1, ..., elemN])
let arr = ['I`m', 'studying', 'programming'];
arr.splice(1, 1); //delete 1 element from the position 1
console.log(arr);

let arr2 = ['I', 'love', 'music'];
arr2.splice(0, 2, 'Kate', 'hate'); //delete 2 elements from the beginning and replace them with the new
console.log(arr2);

//Splice can just add elements, if 'deleteCount' = 0
let arr3 = ['I`m', 'studying', 'programming', 'lessons'];
arr3.splice(2, 0, 'amazing', 'language on');
console.log(arr3);