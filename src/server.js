import express from "express";

const server = express();
const port = 3001;
server.listen(port, () => {
  console.log("server running on port:", port);
});
