const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");
const methodOverride = require("method-override");
const express = require("express");
const app = express();
let port = 8080;
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join((__dirname, "public"))));
app.use(express.urlencoded({ extended: true }));

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

app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;

      res.render("show", { users: result });
    });
  } catch (error) {
    res.send("Error in DB");
  }
});

app.get("/user/:id/edit", (req, res) => {
  const { id } = req.params;
  let q = `SELECT * FROM user WHERE id ="${id}"`;
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      console.log(result);
      let user = result[0];
      res.render("edit", { user });
    });
  } catch (error) {
    res.send("Something Happen in DB");
  }
});
app.patch("/user/:id", (req, res) => {
  res.send("Success");
});

app.listen(port, () => {
  console.log(`App is working on ${port}`);
});
