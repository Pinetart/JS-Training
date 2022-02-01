import { styleBody, addTitle, contact } from "./dom";
import users, { getPremUsers } from "./data";

let premUsers = getPremUsers(users);
console.log(users);
console.log(premUsers);
