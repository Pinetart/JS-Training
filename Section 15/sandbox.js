const userOne = {
  username: "ryu",
  email: "ryu@thenetninja.co.uk",
  login() {
    console.log(`${this.username} logged in`);
  },
  logout() {
    console.log(`${this.username} logged out`);
  },
};

console.log(userOne.username, userOne.email);
userOne.login();

const userTwo = {
  username: "chun li",
  email: "chun.li@thenetninja.co.uk",
  login() {
    console.log(`${this.username} logged in`);
  },
  logout() {
    console.log(`${this.username} logged out`);
  },
};

console.log(userTwo.username, userTwo.email);
userTwo.login();