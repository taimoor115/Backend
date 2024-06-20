const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "app",
  password: "root",
});

let q = "INSERT INTO user(id, username, email, password) VALUES ?";

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(createRandomUser());
}
try {
  connection.query(q, [data], (err, result) => {
    if (err) throw new Error();
    console.log(result);
  });
} catch (error) {
  console.log(error);
}
connection.end();
