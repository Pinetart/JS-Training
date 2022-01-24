// Object Literals

// const blogs = [
//   { title: "Why dogs are better than cats", likes: 30 },
//   { title: "Ten things to make with marmite", likes: 50 },
// ];

// blogs.forEach(blog => {console.log(blog)})

let user = {
  name: "Zane",
  age: 23,
  email: "zane.birkett@caricom.org",
  location: "Guyana",
  blogs: [
    { title: "Why dogs are better than cats", likes: 30 },
    { title: "Ten things to make with marmite", likes: 50 },
  ],
  logBlogs() {
    console.log("The user has written the following blogs:");
    this.blogs.forEach(blog => {
        console.log(`Title: ${blog.title}, \nLikes: ${blog.likes}`)});
  }
};

// console.log(this)
user.logBlogs();
