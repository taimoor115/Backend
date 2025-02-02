import cluster from "cluster";
import os from "os";
import express from "express";

const app = express();

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  app.get("/", (_, res) => {
    res.send(`Hello World ${process.pid}`);
  });

  app.listen(3000, () => {
    console.log(`Server is running on port 3000 ${process.pid}`);
  });
}
