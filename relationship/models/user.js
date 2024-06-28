const mongoose = require("mongoose");

// DB Setup

const mongoURL = "mongodb://127.0.0.1:27017/relationship";
main()
  .then(() => {
    console.log("DB Connecting..");
  })
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect(mongoURL);
}

const userSchema = new mongoose.Schema({
  username: String,
  addresses: [{ _id: false, location: String, city: String }],
});

const User = new mongoose.model("User", userSchema);

const addUser = async () => {
  const user1 = new User({
    username: "Qasim",
    addresses: [{ location: "Street # 1 Shalimar, Lahore", city: "Lahore" }],
  });
  user1.addresses.push({
    location: "Street # 2  Breatwhight, Paris",
    city: "London",
  });

  let result = await user1.save();
  console.log(result);
};

addUser();
