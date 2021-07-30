
const testObj = {
    name: 'yourName',
    sayHello: function() {
        console.log(`Hello ${this.name}`);
    }
}

testObj.sayHello();

function foo() {
    console.log(this);
}

foo() // window - global obj
new foo() // we have created an object foo via new keyword, that why this points to 'foo'

function closure() {
    let localVariable = 'private variable';
    return function() {
        return localVariable; // inner function has access to the outer function scope
        // if we will create a new variable inside the inner function
        // it wouldn't be visible for the "closure" function
    }
}

let getLocalVariable = closure();
console.log(getLocalVariable()); // "private variable"

let x = this;

console.log(this);
function hello() {
    console.log('Hello, ', this)
}

const person = {
    name: 'Alex',
    age: 22,
    sayHello: hello,
    sayHelloGlobally: hello.bind(this)
}

hello()
person.sayHello();
person.sayHelloGlobally();
function test() {
    const a = 4;
    console.log(foo());
    console.log(b);

    function foo() {
        const b = 3;
        console.log(a)
        return 2;

    }
}

test();


const obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function() {
            return this.fullName;
        }
    }
};

console.log(obj.prop.getFullName());




