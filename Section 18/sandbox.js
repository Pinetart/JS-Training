// Rest Parameter
const double = (...nums) => {
  console.log(nums);
  return nums.map((num) => num * 2);
};
const result = double(1, 3, 5, 7, 9, 2, 4, 6, 8);
console.log(result);

// spread syntax
const people = ["shaun", "ryu", "crystal"];
const members = ["mario", "chun li", ...people];
console.log(members);

const person = {
  name: "shaun",
  age: 30,
  job: "Net Ninja",
};

const personClone ={...person};
console.log(personClone)