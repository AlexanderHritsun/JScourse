console.log(4/0); //Infinity
console.log(-4/0); //-Infinity
console.log('string' * 10); //NaN (not a number)

let number = 12;

number++; //inc
number--; //decr
number+= 5; // number = number + 5
number-= 5; // number = number - 5. We can do this trick with all operations * / %
console.log(number++); //12
console.log(number); //13
console.log(number--); //13
console.log(number); //12
console.log(--number); //11

//Math object
let a = Math.cos(1) + Math.PI;
console.log(a);

console.log(Math.sqrt(Math.random()));