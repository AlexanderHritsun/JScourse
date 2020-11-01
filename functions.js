
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

// arrow function !!! no this !!!
const getSum3 = (a, b) => { // const getSum3 = a => a*a;
    return a + b;
}

getSum3(5, 10);