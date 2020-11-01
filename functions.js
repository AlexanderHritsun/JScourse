
// function with no arguments
function showMessage() {
    console.log('Hello, mad world!')
}

showMessage();

// function with arguments
function getSum(a, b) {
    return a + b;
}

console.log(getSum(5, 10));

// function expression
const getSum2 = function (a, b) {
    return a + b;
}

getSum2(5, 10);

// arrow function !!! this - doesn't have own context in the arrow functions !!!
// With an arrow function THIS represents the owner of the function
const getSum3 = (a, b) => { // const getSum3 = a => a*a;
    return a + b;
}

getSum3(5, 10);