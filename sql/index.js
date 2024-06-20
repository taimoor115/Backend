const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");
const express = require("express");
const app = express();
let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "app",
  password: "root",
});

app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0]["count(*)"];
      res.render("home", { user });
    });
  } catch (err) {
    res.send("Something happend in DB");
  }
});

app.listen(port, () => {
  console.log(`App is working on ${port}`);
});
// let q = "INSERT INTO user(id, username, email, password) VALUES ?";

// let createRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(createRandomUser());
// }
// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw new Error();
//   });
// } catch (error) {
//   console.log(error);
// }
// connection.end();
