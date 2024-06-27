// Middleware

// request --> middleware --> response
// Middlewares are the intermediatry between the coming request from the client and going response to client.
// It can execute any code.
// It can access the req, res object and manipulate it.
// It can chain functions , Call the  next middleware in the stack
// It can send response and end request response cycle

const express = require("express");
const app = express();

app.get("/err", (req, res) => {
  abc = abc;
});

app.use((err, req, res, next) => {
  console.log("ERROR 1-----");
  next(err);
});

app.use((err, req, res, next) => {
  console.log("ERROR 2-----");
  next(err);
});

const checkAccessiblity = (req, res, next) => {
  const { token } = req.query;
  if (token === "give_access") {
    next();
  } else {
    res.send("ACCESS DENIED!");
  }
};

app.get("/api", checkAccessiblity, (req, res) => {
  res.send("Data...");
});
app.get("/", (req, res) => {
  res.send("Working fine...");
});
app.get("/random", (req, res) => {
  res.send("random");
});

// app.use((req, res) => {
//   res.status(404).send("Page not Found");
// });

const port = 8080;

app.listen(port, (req, res) => {
  console.log(`Server is working on port ${port}`);
});
