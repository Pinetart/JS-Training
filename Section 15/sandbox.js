class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username,email)
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

const test = new User("zane", "zanebirkett@icloud.com");
const test2 = new User("Mario", "Mario@gmail.com");
const test3 = new Admin("axel", "axelbirkett@icloud.com", "black-belt-ninja");
// console.log(test, test2);
// test.login().logout();
// test.incScore().incScore().incScore().logout();
// console.log(test3)

let users = [test, test2, test3];
console.log(users);

// test3.deleteUser(test3);
// console.log(users);
