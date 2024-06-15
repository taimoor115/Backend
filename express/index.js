const express = require("express");
const app = express();
// Ports are the logical endpoints of a network connection that is used to exchange information
// between a web server and web client
const port = 8080;

// console.dir(app);

app.listen(port, () => {
  console.log("App is listening ");
});
