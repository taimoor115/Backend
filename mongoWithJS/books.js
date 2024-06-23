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
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Enter postive value"],
  },

  discount: {
    type: Number,
    default: 0,
  },
  genre: [String],
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Books = mongoose.model("Books", booksSchema);

const book2 = new Books({
  title: "Java",
  author: " William ",
  price: 2000,
  genre: ["Love Computer", "Programming"],
  category: "fiction",
});

Books.findByIdAndUpdate(
  "66786a2856aa01df9f128985",
  { price: -500 },
  { runValidators: true }
)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.errors.price.properties.message));
// book2.save().then((res) => console.log(res));
