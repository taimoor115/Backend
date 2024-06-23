const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

// middleware

app.set(express.urlencoded({ extended: true }));
app.set(express.json());
// Setup EJS

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));

// Setup Mongoose

main()
  .then(() => {
    console.log("Mongo is Connecting...");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb//127.0.0.1:27017/project");
}

// Setup server
const port = 8080;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
