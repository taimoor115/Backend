const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true })); // express.urlencoded is the middleware that help express to understand the data
app.use(express.json()); //express.json is also the middleware that help to understand the json() data
app.get("/register", (req, res) => {
  const { username } = req.query;
  res.send(`You made a ${username} get request`);
});

app.post("/register", (req, res) => {
  const { username } = req.body;
  console.log(req.body); // if we don't use the middleware it is undefined because express wants to clear that which data is comming from the client
  res.send(`You made a ${username} post request`);
});

app.listen(port, () => {
  console.log(`App is listening ${port}`);
});
