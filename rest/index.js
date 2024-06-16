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
app.set(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.send("<p>server working well</p>");
});
// Server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
