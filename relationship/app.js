const express = require("express");
const app = express();

// Routes

app.get("/", (req, res) => {
  res.send("Working fine....");
});
// Server
const port = 8080;
app.listen(port, (req, res) => {
  console.log(`Connecting to Server on port ${port}`);
});
