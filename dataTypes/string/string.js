let one = 'one',
    two = "two",
    three = `three`

const stringOne = 'We love JavaScript!';
const yes = 'Yes! ';

//charAt - return symbol by index
console.log(stringOne.charAt(3));
//charCodeAt - return unicode of the symbol by index
console.log(stringOne.charCodeAt(3));
//concat
console.log(one.concat(two));
console.log(three + two);
//endsWith & startsWith
console.log(stringOne.endsWith('Script'));
//includes
console.log(stringOne.includes('love')); //true
//indexOf
console.log(stringOne.indexOf('e'));
//lastIndexOf
console.log(stringOne.lastIndexOf('e'));
//match
console.log(stringOne.match(/e/g));
//repeat
console.log(yes.repeat(3));
//replace
console.log(stringOne.replace(/e/g, 'E'));
//search
console.log(stringOne.search('love'));
//slice
console.log(stringOne.slice(7, 18));
//split
console.log(stringOne.split(' '));
//substr
console.log(stringOne.substr(7, 5));
//substring
console.log(stringOne.substring(7, 18));
//toLowerCase & toUpperCase
console.log(stringOne.toLowerCase());
//trim
console.log(yes.trim());