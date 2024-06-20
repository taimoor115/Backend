const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "app",
  password: "root",
});

let q = "INSERT INTO user(id, username, email, password) VALUES ?";

let users = [
  ["2", "Ghayoor Hussain", "ghayoorhussain@gmail.com", "1234"],
  ["3", "Usman Yousaf", "usmanyousaf@gmail.com", "1234"],
];
try {
  connection.query(q, [users], (err, result) => {
    if (err) throw new Error();
    console.log(result);
    console.log(result[0]);
    console.log(result[1]);
    console.log(result.length);
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
