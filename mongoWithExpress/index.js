const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

// middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
  await mongoose.connect("mongodb://127.0.0.1:27017/project");
}

// DB Commands

// Routes
app.get("/", (req, res) => {
  res.send("Server is working....");
});

// Read
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("chat", { chats });
});

// Create
app.get("/chats/new", (req, res) => {
  try {
    res.render("newChat");
  } catch (error) {
    console.log(error);
  }
});

app.post("/chats", (req, res) => {
  const { from, message, to } = req.body;
  const chat = new Chat({
    from,
    to,
    message,
    createdAt: new Date(),
  });
  chat
    .save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  res.redirect("/chats");
});

// Edit
app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;

  const chat = await Chat.findById(id);

  res.render("editChat", { chat });
});
// Setup server
const port = 8080;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
