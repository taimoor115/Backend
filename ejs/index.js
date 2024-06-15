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

app.listen(port, () => {
  console.log(`App is listening on port ${port}...`);
});
