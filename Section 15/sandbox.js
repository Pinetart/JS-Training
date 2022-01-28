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
    console.log(`${this.username} has a score of ${this.score}`)
    return this;
  }
}

const test = new User("zane", "zanebirkett@icloud.com");
const test2 = new User("Mario", "Mario@gmail.com");
// console.log(test, test2);
// test.login().logout();
test.incScore().incScore().incScore().logout();

