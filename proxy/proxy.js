//Objects
const person = {
    name: 'Alex',
    age: 22,
    job: 'SDET'
}
const op = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting prop: ${prop}`);
        if(!(prop in target)) {
           return  prop
               .split('_')
               .map(p => target[p])
               .join(' '); //op.name_age_job
        }
        return target[prop]
    },
    set(target, prop, value) {
        if(prop in target) {
            target[prop] = value;
        } else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, prop) {
      return ['age', 'job'].includes(prop);
    },
    deleteProperty(target, p) {
        console.log('Deleting...', p);
        delete target[p];
        return true
    }
});

//Functions
const log = text => `Log: ${text}`;

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn...');

        return target.apply(thisArg, args).toLocaleLowerCase();
    }
})

//Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const PersonProxy = new Proxy(Person, {
    construct(target, argArray) {
        return new Proxy(new target(...argArray), {
            get(t, p) {
                console.log(`Getting prop "${p}"`)
                return t[p];
            }
        })
    }
})

const p = new PersonProxy('Maxim', 30);