// Object Literals

let user = {
  name: "Zane",
  age: 23,
  email: "zane.birkett@caricom.org",
  location: "Guyana",
  blogs: ["Dog are better than cats", "Guyana is great"],
  login(){
    console.log("the user is logged in");
  },
  logout(){
    console.log("the user is logged out");
  },
  logBlogs(){
    console.log('The user has written the following blogs:')
    this.blogs.forEach(blog => console.log(blog));
  }
};

// console.log(this)
user.logBlogs();
