const express = require("express");
const path = require("path");
const app = express();
let port = 8080;
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.send("hello");
});

app.get("/rolldice", (req, res) => {
  const value = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { num: value });
});

app.get("/:username", (req, res) => {
  const { username } = req.params;
  let followers = ["Hussain", "Qasim", "Usman", "Bilal", "Hamza", "Umer"];
  res.render("instagram", { username, followers });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}...`);
});
