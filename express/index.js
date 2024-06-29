const express = require("express");
const app = express();
const session = require("express-session");

const port = 8080;

const sesstionOptions = {
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sesstionOptions));

app.get("/register", (req, res) => {
  let { name = "Anonymous" } = req.query;
  req.session.name = name;
  res.send(`User ${name}`);
});

app.get("/hello", (req, res) => {
  res.send(`Hello ${req.session.name}`);
});
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
