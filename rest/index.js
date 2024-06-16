const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ejs
app.set("view engine", "ejs");
// paths
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

// data

let posts = [
  {
    id: uuidv4(),
    username: "taimoor",
    content: "Hey there! I'm learning Backend",
  },
  {
    id: uuidv4(),
    username: "Taimoor Hussain",
    content: "Hey there! How is going? Hope so its going well",
  },
];

// Routes

// Show Post
app.get("/posts", (req, res) => {
  res.render("home", { posts });
});
// Create Post
app.get("/posts/new", (req, res) => {
  res.render("create.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let newPost = {
    id: uuidv4(),
    username: username,
    content: content,
  };
  posts.push(newPost);
  res.redirect("/posts");
});

// Show Individual post

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  let data = posts.find((post) => post.id == id);

  res.render("read", { post: data });
});

// Server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
