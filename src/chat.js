const express=require("express");
const app=express();
const path=require('path');
require("dotenv").config();
const port=process.env.PORT || 3000;

const { Server } = require("socket.io");
const http=require('http');
const server=http.createServer(app)
const io = new Server(server);  

app.use(express.static(path.resolve("src/public")));
app.use(express.static(path.resolve("node_modules/bootstrap/dist")));
app.use(express.static("node_modules/socket.io/client-dist/"));


/* socket */
app.get("/",(req,res)=>{
    //res.status(200).send("Chat App");
    res.sendFile(__dirname + 'public/chat.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
      console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
});
});

server.listen(process.env.PORT,()=>{
    console.log(`Chat Server running at http://127.0.0.1:${port}`);
});