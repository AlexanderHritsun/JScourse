 const obj = {
    name: 'Alexander',
    age: 22,
    job: 'SDET'
 }

 const entries = [
     ['name', 'Alexander'],
     ['age', 22],
     ['job', 'SDET']
 ]
 const map = new Map(entries);

console.log(map);
console.log(map.get('job'));

// different data types can be set as keys/values
map
    .set('newField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'Nan?')

// console.log(map);
// console.log(map.get(obj));
//
// map.delete('job');
// console.log(map.has('job'));
// console.log(map.size);
//
// map.clear()
//  console.log(map.size);

for ( let entry of map.entries()) {
    console.log(entry);
}

for ( let [key, value] of map) {
    console.log(key, value);
}

 for ( let val of map.values()) {
     console.log(val);
 }

 for ( let key of map.keys()) {
     console.log(key);
 }

 map.forEach((val, key, m) => {
     console.log(key, val);
 })

 // ============================================================================= //

 const array = [...map];
 console.log(array);

 const mapObj = Object.fromEntries(map.entries());

 console.log(mapObj);

 // ============================================================================= //


 const users = [
     {name: 'Elena'},
     {name: 'Alex'},
     {name: 'Vlad'},
 ]

 const visits = new Map()

 visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[1], new Date(new Date().getTime() + 5000 * 60))

 function lastVisit(user) {
     return visits.get(user)
 }
 console.log(lastVisit(users[2]));