const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

// middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

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

//
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// Read
app.get(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("chat", { chats });
  })
);

// Create
app.get(
  "/chats/new",
  asyncWrap((req, res, next) => {
    res.render("newChat");
  })
);

app.post(
  "/chats",
  asyncWrap((req, res, next) => {
    const { from, message, to } = req.body;
    const chat = new Chat({
      from,
      to,
      message,
      createdAt: new Date(),
    });
    chat.save();
    res.redirect("/chats");
  })
);

// Edit
app.get(
  "/chats/:id/edit",
  asyncWrap(async (req, res, next) => {
    const { id } = req.params;

    const chat = await Chat.findById(id);

    res.render("editChat", { chat });
  })
);

// update
app.patch(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    const { id } = req.params;
    const { message } = req.body;

    await Chat.findByIdAndUpdate(
      id,
      { message, createdAt: new Date() },
      { new: true, runValidators: true }
    );
    res.redirect("/chats");
  })
);

// Delete

app.delete(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    await Chat.findByIdAndDelete(id, { new: true }).then((res) =>
      console.log(res)
    );
    res.redirect("/chats");
  })
);

app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);

    if (!chat) {
      next(new ExpressError(401, "Chat not found"));
    }
    res.render("editChat", { chat });
  })
);

app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occurred" } = err;
  res.status(status).send(message);
});
// Setup server
const port = 8080;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
