const express = require("express");
const app = express();

const port = 8080;

app.get("/register", (req, res) => {
  const { username } = req.query;
  res.send(`You made a ${username} request`);
});
app.listen(port, () => {
  console.log(`App is listening ${port}`);
});
