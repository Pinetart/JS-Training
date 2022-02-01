// sets
const namesArray = ["shaun", "ryu", "crystal", "ryu"];
console.log(namesArray);

// const namesSet = new Set(namesArray)
// console.log(namesSet)

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20).add(25);
ages.delete(25);
console.log(ages, ages.size);
console.log(ages.has(30));
ages.clear();
console.log(ages);

const ninjas = new Set([
  { name: "shaun", age: 30 },
  { name: "crystal", age: 29 },
  { name: "chun-li", age: 32 },
]);

ninjas.forEach(ninja => {
    console.log(ninja.name,ninja.age)
})