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

// User.find({ age: { $gt: 24 } }).then((res) => console.log(res));

// User.find({ _id: "66780fb8ffd3da3bf619f65b" }).then((res) => console.log(res));

User.findById("66780fb8ffd3da3bf619f65b").then((res) => console.log(res));
