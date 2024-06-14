// Procedure to add Events in Node
// Make a class that extends the EventEmitter
// Make a method and put the emit on it that raise the noise or event/signal
// Then export that class
// After that make an instance of that class and put the listener on it and then
// call the method of class

const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", (args) => console.log(args));

logger.log("Hello");
