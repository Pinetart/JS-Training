// localStorage.setItem("name", "Mario");
// localStorage.setItem("age", 50);

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// console.log(name, age);

localStorage.setItem("key", "XBOA!@)!OSAX");
let keyString = localStorage.getItem("key");

console.log(keyString)
localStorage.clear();

keyString = localStorage.getItem("key");

console.log(keyString);