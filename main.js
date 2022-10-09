const createUser = require("create_user.js");
const express = require("express");
const app = require("app");
const socketIo = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketIo(server);
io.on('connection', (socket) => {
   socket.on('addUsser', (username,pass,accessKey) => {
      createUser(username,pass,accessKey);
   })
   
})
server.listen("8000", () => console.log("app is listening on 8000"));