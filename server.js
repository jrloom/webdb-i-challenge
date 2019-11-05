const express = require("express");
const server = express();
const accountsRouter = require("./accounts/accountsRouter.js");

server.use(express.json());

server.use("/api/accounts", accountsRouter);

// * sanity
server.get("/", (req, res) => res.status(200).json({ message: "Good news" }));

module.exports = server;
