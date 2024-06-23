const mongoose = require("mongoose");

main()
  .then(() => console.log("Conntection"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/app");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user2 = new User({
  name: "Gahyoor Hussain",
  email: "ghayoorhussain@gmail.com",
  age: 27,
});

user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
