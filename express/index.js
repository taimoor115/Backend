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
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
  let { name = "Anonymous" } = req.query;
  req.session.name = name;
  if (req.session.name === "Anonymous") {
    req.flash("error", "Registration Failed");
  } else {
    req.flash("success", "Registration successfull");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page", { name: req.session.name });
});
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
