// For File Module we import the fs module.In this module every method have two nature that is
// async and sync in nature sync is quite simple to understand while async is a bit complex to understand
// but we should use the async because it is non-blocking in nature

const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log(files);

fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log(files);
});
