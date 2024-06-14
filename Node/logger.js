const EventEmitter = require("events");

const url = "http://www.google.com.log";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1, url: url });
  }
}

module.exports = Logger;
