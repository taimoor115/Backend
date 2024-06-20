const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "app",
  password: "root",
});

try {
  connection.query("Show Tables", (err, result) => {
    if (err) throw new Error();
    console.log(result);
  });
} catch (error) {
  console.log(error);
}
connection.end();

let createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

console.log(createRandomUser());
