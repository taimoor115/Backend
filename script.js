// Events are signals that gives info that something has happen

const EventEmitter = require("events"); //EventEmitter is class in events

const emitter = new EventEmitter();

emitter.on("messageLogged", function () {
  console.log("Event Logged");
});

emitter.emit("messageLogged");
