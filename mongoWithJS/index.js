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

// User.deleteOne({ name: "Taimoor Hussain" }).then((res) => console.log(res));
// deleteMany
// findOneAndDelete
// findByIdAndDelete
// User.find().then((res) => console.log(res));
