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

User.updateOne({ name: "Gahyoor Hussain" }, { name: "Bilal Arshad" }).then(
  (res) => console.log(res)
);

User.updateMany({ age: { $gt: 20 } }, { age: 22 }).then((res) =>
  console.log(res)
);

User.findOneAndUpdate(
  { name: "Taimoor Hussain" },
  { age: 34 },
  { new: true }
).then((res) => console.log(res));

User.findByIdAndUpdate(
  "66780f5a07f09aa2d3875345",
  { age: 35 },
  { new: true }
).then((res) => console.log(res));
// User.find().then((res) => console.log(res));
