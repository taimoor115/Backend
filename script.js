// Process
// This object provides about the information and control over, the current Node js process

// process.argv
// returns an array containing the command line arguments passed when the Node js proccess was launched

let args = process.argv;

console.log(args.length);

for (let i = 2; i < args.length; i++) {
  console.log("Hello to", args[i]);
}
