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
  res.cookie("name", "Taimoor hussain");
  res.send("Cookies ");
});

// app.get("/:username/:id", (req, res) => {
//   const { username, id } = req.params;
//   const code = `<h1>Welcome to ${username} Account</h1>`;
//   res.send(code);
// });

// http://localhost:8080/search?q=Mango&color=yellow
// app.get("/search", (req, res) => {
//   const { q, color } = req.query;
//   console.log(q);
//   res.send(`Result for ${q} ${color}`);
// });

// app.get("/about", (req, res) => {
//   res.send("About page Content");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact page Content");
// });

// app.get("*", (req, res) => res.send("Error Page"));
