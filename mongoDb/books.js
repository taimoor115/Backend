const mongoose = require("mongoose");

main()
  .then(() => console.log("Connection establish"))
  .catch((err) => console.loge(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Books = mongoose.model("Books", booksSchema);

const book1 = new Books({
  title: "Computer Science",
  author: "Hassan Munawar",
  price: 2000,
});

book1.save().then((res) => console.log(res));
