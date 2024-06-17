const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOveride = require("method-override");
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Override request
app.use(methodOveride("_method"));
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
  res.render("create");
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

// Update the post
app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const newContent = req.body.content;
  let data = posts.find((post) => post.id == id);
  data.content = newContent;
  res.redirect("/posts");
});

// Edit form
app.get("/posts/:id/update", (req, res) => {
  const { id } = req.params;
  let post = posts.find((post) => post.id == id);

  res.render("update", { post });
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;

  posts = posts.filter((post) => post.id !== id);

  res.redirect("/posts");
});

// Server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
