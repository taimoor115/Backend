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

User.insertMany([
  { name: "Usman", email: "usman@gmail.com", age: 22 },
  { name: "Hamza", email: "hamza@gmail.com", age: 22 },
  { name: "Umer", email: "umer@gmail.com", age: 23 },
]).then((res) => console.log(res));
