const info = require("./Fruits");

info.map((fruits) => {
  console.log("Fruit", fruits.name, "and their color is ", fruits.color);
});
