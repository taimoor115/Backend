const os = require("os");

const freeMemory = os.freemem();
const totalMemory = os.totalmem();

console.log(freeMemory);
console.log(totalMemory);
console.log(os.availableParallelism());
console.log(os.uptime());
console.log(os.hostname());
