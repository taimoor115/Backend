// Middleware

// request --> middleware --> response
// Middlewares are the intermediatry between the coming request from the client and going response to client.
// It can execute any code.
// It can access the req, res object and manipulate it.
// It can chain functions , Call the  next middleware in the stack
// It can send response and end request response cycle

const express = require("express");
const app = express();

const port = 8080;

app.use("/api", (req, res, next) => {
  const { token } = req.query;
  if (token === "give_access") {
    next();
  } else {
    res.send("ACCESS DENIED!");
  }
});

app.get("/api", (req, res) => {
  res.send("Data...");
});
app.get("/", (req, res) => {
  res.send("Working fine...");
});
app.get("/random", (req, res) => {
  res.send("random");
});
app.listen(port, (req, res) => {
  console.log(`Server is working on port ${port}`);
});

app.use((req, res) => {
  res.status(404).send("Page not Found");
});
