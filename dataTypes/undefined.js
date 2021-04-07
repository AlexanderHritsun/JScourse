//undefined - переменная объявлена, но не инициализирована
const und;
console.log(und);
const test = undefined;
console.log(test);
console.log(typeof test);

///Looking up non-existent properties in an object
const sum = (a, b) => {
    return a.value + b.value;
}

console.log(sum());

/*  - null is an assigned value. It means nothing.
    - undefined means a variable has been declared but not defined yet.
    - null is an object. undefined is of type undefined.
    - null !== undefined but null == undefined */