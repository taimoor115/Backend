const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

let newChats = [
  {
    from: "Bilal Arshad",
    to: "Taimoor Hussain",
    message: "I'm Fine bro..",
    createdAt: new Date(),
  },
  {
    from: "Bilal Arshad",
    to: "Taimoor Hussain",
    message: "I'm Fine bro..",
    createdAt: new Date(),
  },
  {
    from: "Ghayoor Hussain",
    to: "Taimoor Hussain",
    message: "Where ",
    createdAt: new Date(),
  },
  {
    from: "Taimoor Hussain",
    to: "Ghayoor Hussain",
    message: "I'm at home ..",
    createdAt: new Date(),
  },
  {
    from: "Usman",
    to: "Taimoor Hussain",
    message: "Hello..",
    createdAt: new Date(),
  },
];

Chat.insertMany(newChats);
