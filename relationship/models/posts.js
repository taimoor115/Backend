const mongoose = require("mongoose");
const { Schema } = require("mongoose");

// DB Setup

const mongoURL = "mongodb://127.0.0.1:27017/relationship";
main()
  .then(() => {
    console.log("DB Connecting..");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoURL);
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = new mongoose.model("User", userSchema);
const Post = new mongoose.model("Post", postSchema);

const addData = async () => {
  const user = await User.findOne({ username: "Qasim Ali" });

  const post = new Post({
    content: "Hello guys",
    likes: 211,
  });
  post.user = user;

  await post.save();
};

// addData();

const findData = async () => {
  let result = await Post.find({}).populate("user", "username");
  console.log(result);
};

findData();
