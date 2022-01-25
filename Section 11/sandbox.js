const now = new Date();
const before = new Date("June 6 1998 8:30:40");

// console.log(now.getTime());
// console.log(before.getTime())

const diff = now.getTime() - before.getTime();
// console.log(diff)

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const years = Math.round(days / 365);
console.log(before.getTime());

const trying = new Date(897136240000);
// console.log(trying.getHours())
