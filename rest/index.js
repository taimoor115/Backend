const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");

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
    username: "taimoor",
    content: "Hey there! I'm learning Backend",
  },
  {
    username: "Taimoor Hussain",
    content: "Hey there! How is going? Hope so its going well",
  },
];

// Routes
app.get("/posts", (req, res) => {
  res.render("home", { posts });
});
// Server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
