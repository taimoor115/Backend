const express = require("express");
const app = express();
const session = require("express-session");

const port = 8080;

app.use(
  session({
    secret: "supersecretkey",
    resave: "false",
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }

  res.send(`You set ${req.session.count} times request`);
});

app.get("/test", (req, res) => {
  res.send("Testing...");
});
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
