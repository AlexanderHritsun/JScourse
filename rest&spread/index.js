const ukrainianCities = ['Sumy', 'Kiev', 'Dnipro', 'Lviv'];
const europeanCities = ['Praha', 'Krakow', 'Vienna', 'Riga'];

// Spread will return(spread) an array values
console.log(...ukrainianCities);
console.log(...europeanCities);

const allCities = [...ukrainianCities, 'New York', ...europeanCities];
console.log(allCities); // allCities === ukrainianCities + europeanCities

//===================================+===================================+===================================+//

const citiesUkrPopulation = {
    Sumy: 2,
    Kiev: 10,
    Dnipro: 6,
    Lviv: 5
}
const citiesEuPopulation = {
    Riga: 2,
    Vienna: 10,
    Krakow: 6,
    Praha: 5,
    Kiev: 12,
}

//console.log(...citiesEuPopulation) // error, object is not iterable
console.log({...citiesEuPopulation}) // === citiesEuPopulation object
console.log({...citiesEuPopulation, ...citiesUkrPopulation}); // concat/merge two objects. Besides we will have only one
// Kiev key with value = 10 because citiesUkrPopulation was on the second position in the new obj

//Practice
const numbers = [5, 36, 42, 17]
console.log(Math.max(...numbers));
console.log(Math.max.apply(null, numbers)); // how it was before

const divs = document.querySelectorAll('div');
console.log(divs, Array.isArray(divs)); // returns the NodeList
const nodes = [...divs];
console.log(nodes, Array.isArray(nodes)); // array


// Rest

function sum(a, b, ...rest) {
    console.log(rest); // will return an arguments array
    //console.log(...rest); spread in this case
    return a + b + rest.reduce((a, i) => a + i, 0);
}

const numb = [1, 2, 4, 7];

// !!without adding Rest operator to the func args!!
// Spread that why we will receive 3 as a result (1+2, sum of the two first elements)
//
console.log(sum(...numb));

const [a, b, ...other] = numb;

console.log(a, b, other); // 1, 2 without rest
// 1, 2 [array] with the rest

const person = {
    name: 'Alex',
    age: 22,
    city: 'Sumy',
    country: 'Ukrain'
}

const {name, age, ...address} = person;

console.log(name, age, address)


//Conclusion: Spread operator serves to expand function arguments/object expression where ero or more
// arguments/key-values expected
// Rest helps to represent an indefinite number of arguments as an array

// Spread creates new arrays/objects or transform them somehow
// Rest gathers all parameters to the array(in function) or new rows (in objects)