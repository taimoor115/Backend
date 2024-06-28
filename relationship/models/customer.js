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

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = new mongoose.model("Order", orderSchema);
const Customer = new mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  let customer1 = new Customer({
    name: "Test",
  });

  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocalates" });

  customer1.orders.push(order1);
  customer1.orders.push(order2);

  const result = await customer1.save();
  console.log(result);
};

const findCustomer = async () => {
  const customer = await Customer.find({}).populate("orders");
  console.log(customer[0]);
};

findCustomer();
// addCustomer();
const addOrder = async () => {
  let result = await Order.insertMany([
    { item: "Chips", price: 50 },
    { item: "Chips", price: 50 },
    { item: "Chocalates", price: 500 },
    { item: "Board", price: 5000 },
  ]);

  console.log(result);
};

// addOrder();
