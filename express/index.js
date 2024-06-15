const express = require("express");
const app = express();
// Ports are the logical endpoints of a network connection that is used to exchange information
// between a web server and web client
const port = 8080;

// console.dir(app);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

// app.use((req, res) => {
//   console.log("Request is received");
//   //   res.send("Response send ");
//   let htmlResponse =
//     "<h1>Fruits</h1></br><ul><li>Mango</li><li>Banana</li></ul>";
//   //   res.send(htmlResponse);
//   let objectResponse = {
//     name: "Mango",
//     color: "Yellow",
//   };
//   res.send(objectResponse);
// });

app.get("/", (req, res) => {
  res.send("Home Page is here ");
});

app.get("/about", (req, res) => {
  res.send("About page Content");
});

app.get("/contact", (req, res) => {
  res.send("Contact page Content");
});

app.get("*", (req, res) => res.send("Error Page"));
