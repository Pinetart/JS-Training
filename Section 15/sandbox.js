class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  login() {
    console.log(`${this.username} has logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} has logged out`);
    return this;
  }
}

const test = new User("zane", "zanebirkett@icloud.com");
const test2 = new User("Mario", "Mario@gmail.com");

// User.prototype.login = function () {
//   console.log(`${this.username} has logged in`);
//   return this;
// };

// User.prototype.logout = function () {
//   console.log(`${this.username} has logged out`);
//   return this;
// };

console.log(test);
test.login().logout();
