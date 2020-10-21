const testObj = {
    name: 'Gnat',
    age: 25,
    properties: {
        house1: '5 flats',
        house2: '10 flats'
    }
};

for (const testObjKey in testObj) {
    if(typeof testObj[testObjKey] === "object") {
        for (const i in testObj[testObjKey]) {
            console.log(`Key ${i} has value ${testObj[testObjKey][i]}`);
        }
    } else
    console.log(`Key ${testObjKey} has value ${testObj[testObjKey]}`);
}

const {house1, house2} = testObj.properties;

console.log(house1);