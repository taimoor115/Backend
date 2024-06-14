// Http module raised different events... EventEmitter

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello It's me Taimoor Hussain");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }
});

// server.on("connection", (socket) => console.log("Connecting to the server..."));

server.listen(3000);
console.log("Listening the server...");
