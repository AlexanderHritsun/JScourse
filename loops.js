const array1 = ['dog', 25, {a:1, b:2}, null];

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

let k = 0
do {
    console.log(array1[k]);
    k++;
}
while (k < array1.length);

let j = 0
while (j <= array1.length) {
    console.log(array1[j]);
    j++;
}

console.log(array1.length)