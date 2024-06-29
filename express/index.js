const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const sesstionOptions = {
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sesstionOptions));
app.use(flash());

app.get("/register", (req, res) => {
  let { name = "Anonymous" } = req.query;
  req.session.name = name;
  req.flash("success", "User registrations successfully");
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page", { name: req.session.name, message: req.flash("success") });
});
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
