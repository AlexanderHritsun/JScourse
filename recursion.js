function f(n) {
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}

//console.log(f(4));
// recursion simplifies the code but require more memory if we comparing it with the loop
function factorial(n) {
    return n > 1 ? n * factorial(n -1) : 1;
}
console.log(factorial(6))