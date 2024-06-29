const express = require("express");
const app = express();
const session = require("express-session");

const port = 8080;

app.use(session({ secret: "supersecretkey" }));

app.get("/", (req, res) => {
  res.send("Working...");
});

app.get("/test", (req, res) => {
  res.send("Testing...");
});
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
